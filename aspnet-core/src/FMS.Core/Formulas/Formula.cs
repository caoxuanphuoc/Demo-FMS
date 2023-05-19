using Abp.Domain.Entities;
using FMS.Foods;
using FMS.Materials;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Formulas
{
    public class Formula : Entity<long>
    {
        public long IdMaterial { get; set; }
        public Material Material { get; set; }
        public long IdFood { get; set; }
        public Food Food { get; set; }
        public long quantity { get; set; }
        public Units Units { get; set; }
    }
}
