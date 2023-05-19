using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Foods
{
    public class Food : FullAuditedEntity<long>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public long Price { get; set; }
    }
}
