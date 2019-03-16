using Microsoft.EntityFrameworkCore;
using peopleSearch.API.Models;
namespace peopleSearch.API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
    
        public DbSet<Person> Persons { get; set; }
    
        public DbSet<Photo> Photos { get; set; }
    }
}