using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using FMS.Authorization.Users;

namespace FMS.Foods.Dto
{
    [AutoMapFrom(typeof(Food))]
    public class FoodDto : EntityDto<long>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public long Price { get; set; }
    }
}