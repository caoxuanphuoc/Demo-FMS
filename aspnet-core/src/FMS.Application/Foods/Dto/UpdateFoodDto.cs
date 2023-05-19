using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Foods.Dto
{
    [AutoMapTo(typeof(Food))]
    public class UpdateFoodDto : EntityDto<long>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public long Price { get; set; }
    }
}
