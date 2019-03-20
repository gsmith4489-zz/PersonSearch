import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { PersonService } from './_services/person.service';
import { AlertifyService } from './_services/alertify.service';
import { PersonCardComponent } from './person-card/person-card.component';





@NgModule({
   declarations: [
      AppComponent,
      PersonComponent,
      NavbarComponent,
      PersonCardComponent
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
