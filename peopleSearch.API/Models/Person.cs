using System;

namespace peopleSearch.API.Models
{
    public class Person
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string  LastName { get; set; }

        public string Address { get; set; }

        public DateTime DOB { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Zip { get; set; }

        public string Gender { get; set; }
        
        // Interests

        // Picture
    }
}