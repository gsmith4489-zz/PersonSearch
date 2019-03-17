using System;
using System.Collections.Generic;

namespace peopleSearch.API.Models
{
    public class Person
    {
        public int Id { get; set; }

        public string Firstname { get; set; }

        public string  Lastname { get; set; }

        public string Address { get; set; }

        public DateTime dob { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Zip { get; set; }

        public string Gender { get; set; }
        
        public string Interests { get; set; }

        public string PhotoUrl { get; set; }

        public ICollection<Photo> Photos { get; set; }
    }
}