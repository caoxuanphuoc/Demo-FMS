using Abp.Application.Services;
using FMS.Tables.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Tables
{
    public interface ITableAppService : IAsyncCrudAppService<TableDto, long, PagedTableResultRequestDto, CreateTableDto, UpdateTableDto>
    {

    }
}
