import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {};

  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
  }

  search() {
    
    // Search button pressed.
    // Step 1: Need to make a web api call and pass in what is in the search box as the parameter
    this.alertify.success('Processing Search Request');
  }


}
