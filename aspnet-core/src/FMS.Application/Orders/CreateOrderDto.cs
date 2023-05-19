using Abp.AutoMapper;
using FMS.Foods;
using System;

namespace FMS.Orders
{
    [AutoMapTo(typeof(Order))]
    public class CreateOrderDto
    {
        public StatusOrder OrderStatus { get; set; }
        public DateTime DateTime { get; set; }
        public long Gross { get; set; }
    }
}