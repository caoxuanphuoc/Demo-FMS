using Abp.Application.Services;
using FMS.TableLogs.Dto;
using FMS.TableLogs;
using FMS.TableLogs.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FMS.Tables;
using Abp.Domain.Repositories;

namespace FMS.TableLogs
{
    public class TableLogAppService : AsyncCrudAppService<TableLog, TableLogDto, long, PagedTableLogResultRequestDto, CreateTableLogDto, UpdateTableLogDto>, ITableLogAppService
    {
        public TableLogAppService(IRepository<TableLog, long> repository) : base(repository)
        {
        }
    }
}
