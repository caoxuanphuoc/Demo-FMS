using Abp.Application.Services;
using FMS.TableLogs.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.TableLogs
{
    public interface ITableLogAppService : IAsyncCrudAppService<TableLogDto, long, PagedTableLogResultRequestDto, CreateTableLogDto, UpdateTableLogDto>

    {
    }
}
