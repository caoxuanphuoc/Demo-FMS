using Abp.Application.Services;
using Abp.Domain.Repositories;
using FMS.Authorization.Users;
using FMS.Foods.Dto;
using FMS.Users.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Foods
{
    public class FoodAppService : AsyncCrudAppService<Food, FoodDto, long, PagedFoodResultRequestDto, CreateFoodDto, UpdateFoodDto>, IFoodAppService
    {
        public FoodAppService(IRepository<Food, long> repository) : base(repository)
        {
        }
    }
}
