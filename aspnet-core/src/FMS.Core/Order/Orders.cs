using Abp.Application.Services.Dto;
using Abp.Domain.Entities.Auditing;
using FMS.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Order
{
    public class Orders: FullAuditedEntity<long>
    {
        public string OrderStatus { get; set; }
        public DateTime DateTime { get; set; }
        public long Gross { get; set; }
    }
}
