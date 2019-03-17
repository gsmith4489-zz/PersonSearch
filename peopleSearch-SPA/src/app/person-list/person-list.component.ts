import { Component, OnInit } from '@angular/core';
import { Person } from '../_models/person';
import { PersonService } from '../_services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    /* this causes all persons to be displayed to start with */

    // #TEST  this.loadPersons();
     this.loadPersonSearch();
  }

  loadPersonSearch() {
    this.personService.getPersonSearch('all').subscribe(( persons: Person[]) => {
      this.persons = persons;
    });


  }


  loadPersons() {
    this.personService.getPersons().subscribe((persons: Person[]) => {
      this.persons = persons;
    });

  }

  


}
