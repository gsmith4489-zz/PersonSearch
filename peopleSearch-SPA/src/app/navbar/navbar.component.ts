import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { Person } from '../_models/person';
import { PersonService } from '../_services/person.service';
import { Injectable } from '@angular/core';
declare let alertify: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  persons: Person[];
  model: any = {};
  textValue: string;

  constructor( private personService: PersonService) { }


  ngOnInit() {
  }

  search() {
    // Search button pressed.
    // Step 1: Need to make a web api call and pass in what is in the search box as the parameter
    // Clear out current data with a search that will return no results
    this.loadPersonSearch('zzz');

    // Now calculate the proper search parameter based on what was entered in the search box
    let myText = this.textValue;
    if (myText === '' || myText === null || myText === undefined) {
      myText = 'all';
    }
    // Force it to be lower case 
    myText = myText.toLowerCase();


    // simulate a delayed respone half the time
    if (Math.random() > .5) {
      const msg = alertify.success('Processing Search Results', 1);
      // tslint:disable-next-line: only-arrow-functions
      msg.callback = (isClicked) => {
        if (isClicked) {
             console.log('notification dismissed by user');
        } else {
            this.loadPersonSearch(myText);
         }
      };
      return;
    }

      // API call including parameter
    this.loadPersonSearch(myText);
  }

  loadPersonSearch(search: string) {
    this.personService.getPersonSearch(search).subscribe(( persons: Person[]) => {
      this.persons = persons;
    });
  }
}
