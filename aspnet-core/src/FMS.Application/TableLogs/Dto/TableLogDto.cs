using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using FMS.Foods;
using FMS.Tables;
using System;

namespace FMS.TableLogs.Dto
{
    [AutoMapFrom(typeof(TableLog))]
    public class TableLogDto : EntityDto<long>
    {
        public long TableId { get; set; }
        public string StatusTable { get; set; }
        public DateTime CreationTime { get; set; }
    }
}