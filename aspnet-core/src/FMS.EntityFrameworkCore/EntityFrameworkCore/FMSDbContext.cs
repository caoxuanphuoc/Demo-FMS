using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using FMS.Authorization.Roles;
using FMS.Authorization.Users;
using FMS.MultiTenancy;
using FMS.Foods;
using FMS.Orders;
using FMS.Materials;
using FMS.Tables;
using FMS.Formulas;

namespace FMS.EntityFrameworkCore
{
    public class FMSDbContext : AbpZeroDbContext<Tenant, Role, User, FMSDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<Food> Foods { get; set; }
        public DbSet<Category> Categorys { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }

        public DbSet<Material> Materials { get; set; }
        public DbSet<Formula> Formulas { get; set; }
        public DbSet<MaterialLog> MaterialLogs { get; set; }
        public DbSet<Table> Tables { get; set; }
        public DbSet<TableLog>  TableLogs { get; set; } 
        public FMSDbContext(DbContextOptions<FMSDbContext> options)
            : base(options)
        {
        }
    }
}
