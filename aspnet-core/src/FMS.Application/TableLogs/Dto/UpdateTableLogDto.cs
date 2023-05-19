using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using FMS.Foods;
using FMS.Tables;

namespace FMS.TableLogs.Dto
{
    [AutoMapTo(typeof(TableLog))]

    public class UpdateTableLogDto : EntityDto<long>
    {
        public long TableId { get; set; }
        public StatusT StatusTable { get; set; }

    }
}