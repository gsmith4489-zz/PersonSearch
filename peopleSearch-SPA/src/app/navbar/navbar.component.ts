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
    console.log(this.model);
    this.alertify.success('Processing Search Request');
  }


}
