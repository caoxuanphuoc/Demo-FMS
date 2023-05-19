using Abp.AutoMapper;
using FMS.Foods;
using FMS.Orders;
using System;
using System.ComponentModel.DataAnnotations;

namespace FMS.OrderDetails.Dto
{
    [AutoMapTo(typeof(OrderDetail))]
    public class CreateOrderDetailDto
    {
        [Required]
        public long OrderId { get; set; }
        // Food
        [Required]
        public long FoodId { get; set; }
        // Table
        // When have a record in Order detail then trigger will change status table in tableLog
        [Required]
        public long TableId { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
}