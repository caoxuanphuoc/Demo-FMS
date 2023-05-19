using Abp.Application.Services;
using Abp.Domain.Repositories;
using FMS.Tables.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Tables
{
    public class TableAppService : AsyncCrudAppService<Table, TableDto, long, PagedTableResultRequestDto, CreateTableDto, UpdateTableDto>, ITableAppService
    {
        public TableAppService(IRepository<Table, long> repository) : base(repository)
        {
        }
    }
}
