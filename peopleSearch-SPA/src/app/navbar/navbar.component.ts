import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { Person } from '../_models/person';
import { PersonService } from '../_services/person.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  persons: Person[];
  model: any = {};
  textValue: string;

  constructor(private alertify: AlertifyService, private personService: PersonService) { }

  ngOnInit() {
  }

  search() {
    
    // Search button pressed.
    // Step 1: Need to make a web api call and pass in what is in the search box as the parameter
    this.alertify.success('Processing Search Request');

    // let myText = this.searchname;

    this.loadPersonSearch(this.textValue.toLowerCase());

    // Need to call the person-list component

  }

  


  loadPersonSearch(search: string) {
    this.personService.getPersonSearch(search).subscribe(( persons: Person[]) => {
      this.persons = persons;
    });


}
}
