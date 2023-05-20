using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Tables.Dto
{
    public class TableDetailDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string State { get; set; }
        public DateTime CreationTime { get; set; }
    }
}
