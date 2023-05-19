using Abp.Application.Services.Dto;
using Abp.Domain.Entities.Auditing;
using FMS.Foods;
using FMS.Tables;
using System;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Orders
{
    /// <summary>
    /// Use to store data  for process handle order of customer
   public class OrderDetail : FullAuditedEntity<long>
    {
        // Order
        public long OrderId { get; set; }
        public Order Order { get; set; }
        // Food
        public long FoodId { get; set; }
        public Food Foods { get; set; }
        public long TableId { get; set; }
        public Table Table { get; set; }
        public int Quantity { get; set; }
        public StatusOrder StatusOrderDetail { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}