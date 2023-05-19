using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using FMS.Foods;

namespace FMS.Tables.Dto
{
    [AutoMapTo(typeof(Table))]

    public class UpdateTableDto : EntityDto<long>
    {
        public string Name { get; set; }
    }
}