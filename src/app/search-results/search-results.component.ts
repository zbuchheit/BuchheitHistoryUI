import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/person';
import {ApiService} from '../shared/api.service'



@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchResultTableDataSource = new MatTableDataSource<Person>();
  displayedColumns: string[] = ['firstname', 'lastname', 'dates', 'birthplace'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService:ApiService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(routeParams => {
      this.apiService.getIndividualByFirstNameLastName(routeParams)
      .subscribe(searchResult => {
        this.searchResultTableDataSource.data = searchResult;
        this.searchResultTableDataSource.paginator = this.paginator;
      });
    })
    this.searchResultTableDataSource.data = this.route.snapshot.data.searchResults;
  }

}
