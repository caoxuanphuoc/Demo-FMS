using Abp.Application.Services;
using FMS.Foods.Dto;
using FMS.Users.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Foods
{
    public interface IFoodAppService : IAsyncCrudAppService<FoodDto, long, PagedFoodResultRequestDto, CreateFoodDto, UpdateFoodDto>
    {
    }
}
