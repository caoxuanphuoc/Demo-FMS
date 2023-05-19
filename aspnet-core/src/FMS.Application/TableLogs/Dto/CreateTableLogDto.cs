using Abp.AutoMapper;
using FMS.Foods;
using FMS.Tables;

namespace FMS.TableLogs.Dto
{
    [AutoMapTo(typeof(TableLog))]

    public class CreateTableLogDto 
    {
        public long TableId { get; set; }
      //  public StatusT StatusTable { get; set; } = StatusT.Waiting;
    }
}