using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Tables
{
    public class Table : FullAuditedEntity<long>
    {
        public string Name { get; set; }
    }
}
