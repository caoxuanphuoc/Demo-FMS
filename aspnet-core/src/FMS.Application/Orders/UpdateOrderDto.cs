using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using FMS.Foods;
using System;

namespace FMS.Orders
{
    [AutoMapTo(typeof(Order))]
    public class UpdateOrderDto: EntityDto<long>
    {
        public StatusOrder OrderStatus { get; set; }
        public DateTime DateTime { get; set; }
        public long Gross { get; set; }
    }
}