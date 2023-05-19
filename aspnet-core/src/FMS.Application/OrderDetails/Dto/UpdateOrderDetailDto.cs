using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using FMS.Foods;
using FMS.Orders;

namespace FMS.OrderDetails.Dto
{
    [AutoMapTo(typeof(OrderDetail))]
    public class UpdateOrderDetailDto : EntityDto<long>
    {
        public long OrderId { get; set; }
        // Food
        public long FoodId { get; set; }
        // Table
        // When have a record in Order detail then trigger will change status table in tableLog
        public long TableId { get; set; }
        public int Quantity { get; set; }
        public string StatusOrderDetail { get; set; }
    }
}