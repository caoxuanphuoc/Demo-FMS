using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Materials
{
    public class Material: FullAuditedEntity<long>
    {
        public string Name { get; set; }
        public string Description { get; set; } 
        public long Price { get; set; }
        // is trigger from Materier Log
        public long Quantity { get; set; }
        public Status status { get; set; }
    }
}
