import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { ApiService } from './api.service';

@Injectable({providedIn: 'root'})
export class SearchResolver implements Resolve<unknown> {
  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Person[]> {
    return this.apiService.getIndividualByFirstNameLastName(route.queryParams)
  }
}
