using Abp.Application.Services;
using FMS.OrderDetails.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.OrderDetails
{
    public interface IOrderDetailAppService :  IAsyncCrudAppService<OrderDetailDto, long, PagedOrderDetailResultRequestDto, CreateOrderDetailDto, UpdateOrderDetailDto>
    {
    }
}
