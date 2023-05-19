using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using FMS.Foods;

namespace FMS.Tables.Dto
{
    [AutoMapFrom(typeof(Table))]
    public class TableDto : EntityDto<long>
    {
        public string Name { get; set; }
    }
}