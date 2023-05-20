using AutoMapper;
using FMS.Authorization.Users;
using FMS.Users.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Foods.Dto
{
    public class FoodMapProfile : Profile
    {
        public FoodMapProfile()
        {
            CreateMap<FoodDto, Food>();
            CreateMap<CreateFoodDto, Food>();
        }
    }
}
