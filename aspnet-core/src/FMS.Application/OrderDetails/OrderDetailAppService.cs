using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FMS.Orders;
using Abp.Domain.Repositories;
using FMS.OrderDetails.Dto;

namespace FMS.OrderDetails
{
    public class OrderDetailAppService : AsyncCrudAppService<OrderDetail, OrderDetailDto, long, PagedOrderDetailResultRequestDto, CreateOrderDetailDto, UpdateOrderDetailDto>, IOrderDetailAppService
    {
        public OrderDetailAppService(IRepository<OrderDetail, long> repository) : base(repository)
        {
        }
    }
}
