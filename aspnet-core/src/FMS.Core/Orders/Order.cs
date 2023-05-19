using Abp.Application.Services.Dto;
using Abp.Domain.Entities.Auditing;
using FMS.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Orders
{
    public class Order: FullAuditedEntity<long>
    {
        public StatusOrder OrderStatus { get; set; }
        public DateTime DateTime { get; set; }
        public long Gross { get; set; }
    }
}
