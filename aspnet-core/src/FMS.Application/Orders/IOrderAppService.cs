using Abp.Application.Services;
using FMS.Orders.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FMS.Orders
{
    public interface IOrderAppService : IAsyncCrudAppService<OrderDto, long, PagedOrderResultRequestDto, CreateOrderDto, UpdateOrderDto>
    {
    }
}
