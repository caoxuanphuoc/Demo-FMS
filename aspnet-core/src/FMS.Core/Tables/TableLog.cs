using Abp.Domain.Entities.Auditing;
using Abp.Timing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Tables
{
    public class TableLog: FullAuditedEntity<long>
    {
        public long TableId { get; set; }
        public Table Table { get; set; }
        public StatusT StatusTable { get; set; } 
        public TableLog()
        {
            CreationTime = Clock.Now;
            StatusTable = StatusT.Waiting;
        }
    }
}
