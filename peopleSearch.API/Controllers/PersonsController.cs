using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using peopleSearch.API.Data;
using Microsoft.EntityFrameworkCore;

namespace peopleSearch.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonsController : ControllerBase
    {
        private readonly DataContext _context;
        public PersonsController(DataContext context)
        {
            _context = context;

        }

        // GET api/persons
        [HttpGet]
        public async Task<IActionResult> GetPersons(string search)
        {
            
            if (search == null | search.ToLower()=="all") 
            {
                var persons = await _context.Persons.ToListAsync();
                return Ok(persons);
            } else 
            {
                var persons = await _context.Persons.Where (p => p.Firstname.ToLower().Contains(search) ||
                    p.Lastname.ToLower().Contains(search) ).ToListAsync();
                return Ok(persons);
            }
            
        }

        // GET api/persons/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPerson(int id)
        {
            var person = await _context.Persons.FirstOrDefaultAsync(x=>x.Id==id);

            return Ok(person);
        }

        // POST api/persons
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/persons/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/persons/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
