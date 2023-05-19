using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using FMS.Foods;
using FMS.Orders;
using System;

namespace FMS.OrderDetails.Dto
{
    [AutoMapFrom(typeof(OrderDetail))]
    public class OrderDetailDto : EntityDto<long>
    {
        public long OrderId { get; set; }
        // Food
        public long FoodId { get; set; }
        // Table
        // When have a record in Order detail then trigger will change status table in tableLog
        public long TableId { get; set; }
        public int Quantity { get; set; }
        public string StatusOrderDetail { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}