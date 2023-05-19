using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using FMS.Foods;
using System;

namespace FMS.Orders.Dto
{
    [AutoMapFrom(typeof(Order))]
    public class OrderDto : EntityDto<long>
    {
        public string OrderStatus { get; set; }
        public DateTime DateTime { get; set; }
        public long Gross { get; set; }
    }
}