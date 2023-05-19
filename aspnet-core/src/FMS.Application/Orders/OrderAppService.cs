using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using FMS.Orders.Dto;

namespace FMS.Orders
{
    public class OrderAppService : AsyncCrudAppService<Order, OrderDto, long, PagedOrderResultRequestDto, CreateOrderDto, UpdateOrderDto>, IOrderAppService
    {
        public OrderAppService(IRepository<Order, long> repository) : base(repository)
        {
        }
    }
}
