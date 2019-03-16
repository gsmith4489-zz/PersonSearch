using System.Collections.Generic;
using Newtonsoft.Json;
using peopleSearch.API.Models;

namespace peopleSearch.API.Data
{
    public class Seed
    {
        private readonly DataContext _context;
        public Seed(DataContext context)
        {
            _context = context;

        }

        public void SeedPersons() 
        {
            var personData = System.IO.File.ReadAllText("Data/personseeddata.json");
            var persons = JsonConvert.DeserializeObject<List<Person>>(personData);
            foreach (var person in persons) 
            {
                _context.Persons.Add(person);
            }
            
            _context.SaveChanges();

        }

    }
}