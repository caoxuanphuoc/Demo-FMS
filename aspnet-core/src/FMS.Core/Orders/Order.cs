using Abp.Domain.Entities.Auditing;
using System;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Orders
{
    public class Order : FullAuditedEntity<long>
    {
        public StatusOrder OrderStatus { get; set; }
        public DateTime DateTime { get; set; }
        public long Gross { get; set; }
    }
}