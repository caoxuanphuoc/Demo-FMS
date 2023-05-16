using Abp.Application.Services.Dto;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Materials
{
    public class MaterialLog: FullAuditedEntity<long>
    {
        public long MaterialId { get; set; }
        public Material Material { get; set; }
        public long NumberChange { get; set; }
        public Units Unit { get; set; }
    }
}
