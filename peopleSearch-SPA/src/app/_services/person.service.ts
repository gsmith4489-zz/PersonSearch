import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../_models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
    baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getPersons(): Observable<Person[]> {
  return this.http.get<Person[]>(this.baseUrl + 'persons');

}

getPerson(id): Observable<Person> {
  return this.http.get<Person>(this.baseUrl + 'persons/' + id);

}


}
