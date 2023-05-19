using Abp.AutoMapper;
using FMS.Authorization.Users;

namespace FMS.Foods.Dto
{
    [AutoMapTo(typeof(Food))]
    public class CreateFoodDto 
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public long Price { get; set; }
    }
}