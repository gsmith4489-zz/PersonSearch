import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { PersonService } from './_services/person.service';
import { PersonListComponent } from './person-list/person-list.component';
import { AlertifyService } from './_services/alertify.service';
import { MemberCardComponent } from './member-card/member-card.component';


@NgModule({
   declarations: [
      AppComponent,
      PersonComponent,
      NavbarComponent,
      PersonListComponent,
      MemberCardComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      PersonService,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
