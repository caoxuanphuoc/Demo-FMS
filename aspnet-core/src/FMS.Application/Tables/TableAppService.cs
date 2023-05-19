using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using FMS.Roles.Dto;
using FMS.Tables.Dto;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Tables
{
    public class TableAppService : AsyncCrudAppService<Table, TableDto, long, PagedTableResultRequestDto, CreateTableDto, UpdateTableDto>, ITableAppService
    {
        private readonly IRepository<Table, long> _tableRepository;
        private readonly IRepository<TableLog, long > _tableLogRepository;
        public TableAppService(IRepository<Table, long> repository, IRepository<TableLog, long> tableLogRepository) : base(repository)
        {
            _tableRepository = repository;
            _tableLogRepository = tableLogRepository;
        }
        public  async Task<ListResultDto<TableDetailDto>> GetAll2Async(PagedTableResultRequestDto input)
        {
            var LastTimeOfStateTable = await _tableLogRepository.GetAll()
                                        .GroupBy(Key => new { Key.TableId })
                                        .Select( x=> new
                                        {
                                            TableId = x.Key.TableId,
                                            Time = x.Max( K => K.CreationTime)
                                        })
                                        .ToListAsync();
         
            var Table_TableLog = await _tableRepository.GetAll()
                    .Join(_tableLogRepository.GetAll(),
                        T => T.Id,
                        TL => TL.TableId,
                        (T, TL) => new { Table = T, TableLog = TL })
                    .Select(x => new TableDetailDto
                    {
                        Id = x.Table.Id,
                        Name = x.Table.Name,
                        State = x.TableLog.StatusTable.ToString(),
                        CreationTime = x.TableLog.CreationTime
                    }
                ).ToListAsync();

            List<TableDetailDto> res = new List<TableDetailDto>();
            foreach( var TT in Table_TableLog )
            {
                foreach( var T in LastTimeOfStateTable)
                {
                    if(TT.Id == T.TableId && TT.CreationTime == T.Time)
                    {
                        res.Add(TT);
                    }
                }

            }
            return new ListResultDto<TableDetailDto>(ObjectMapper.Map<List<TableDetailDto>>(res));
        }
    }
}
