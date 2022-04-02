import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../models/person';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private results = new BehaviorSubject(new Person());

  constructor(
    private http: HttpClient
  ) {}

public getResults(): Observable<Person>{
  return this.results.asObservable();
}

public getIndividualByFirstNameLastName(queryParams: {[key: string]: string}): Observable<Person[]>{
  let searchParams = new HttpParams();
  if (queryParams.firstName != '')
  {
    searchParams = searchParams.append('firstName', queryParams.firstName)
  }
  if (queryParams.lastName != ''){
    searchParams = searchParams.append('lastName', queryParams.lastName)
  }
  return this.http
    .get<any>(environment.backend + '/people/search/findAllByFirstNameAndLastName', { params: searchParams })
    .pipe(map((response: any) => {
      return response._embedded.people;
    }))
  }
}
