import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import {ApiService} from '../shared/api.service'

@Component({
  selector: 'app-family-search',
  template: `
  <div class="container">
  <form (ngSubmit)="search()" [formGroup]="searchFormGroup">

    <div class= "input__container">
  <mat-form-field>
    <mat-label>First Name</mat-label>
    <input matInput placeholder="Ex. John" [formControl]="firstNameControl">
  </mat-form-field>

  <mat-form-field>
    <mat-label>Last [Maiden] Name</mat-label>
    <input matInput placeholder="Ex. Buchheit" [formControl]="lastNameControl">
    </mat-form-field>
</div>

<div class = "search_button__container">
  <button mat-flat-button color="primary" [disabled]="searchFormGroup.invalid"
   type='submit'>Search</button>
</div>

</form>
</div>
  `,
  styleUrls: ['./family-search.component.scss']
})
export class FamilySearchComponent {

  searchFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
    )
    {
      this.searchFormGroup = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]]
      })
     }

     get firstNameControl(): FormControl {return this.searchFormGroup.controls.firstName as FormControl; }
     get lastNameControl(): FormControl {return this.searchFormGroup.controls.lastName as FormControl; }

  search(): void{
    this.router.navigate(['/search'], { queryParams: { firstName: this.firstNameControl.value, lastName: this.lastNameControl.value}})
}

}
