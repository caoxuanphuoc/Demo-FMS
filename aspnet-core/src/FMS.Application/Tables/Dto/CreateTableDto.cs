using Abp.AutoMapper;
using FMS.Foods;

namespace FMS.Tables.Dto
{
    [AutoMapTo(typeof(Table))]
    public class CreateTableDto
    {
        public string Name { get; set; }
    }
}