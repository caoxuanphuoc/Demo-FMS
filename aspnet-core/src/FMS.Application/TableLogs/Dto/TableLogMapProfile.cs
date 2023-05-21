using AutoMapper;
using FMS.Foods.Dto;
using FMS.Foods;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FMS.Tables;

namespace FMS.TableLogs.Dto
{
    public class TableLogMapProfile : Profile
    {
        public TableLogMapProfile()
        {
            CreateMap<TableLogDto, TableLog>();
            CreateMap<CreateTableLogDto, TableLog>();
        }
    }
}
