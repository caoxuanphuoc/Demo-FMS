using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using FMS.Foods;
using FMS.Orders;
using System;

namespace FMS.Orders
{
    [AutoMapFrom(typeof(Order))]
    public class OrderDto : EntityDto<long>
    {
        public string OrderStatus { get; set; }
        public DateTime DateTime { get; set; }
        public long Gross { get; set; }
    }
}