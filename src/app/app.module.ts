import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApiService } from './shared/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FamilySearchComponent } from './family-search/family-search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RecordsComponent } from './records/records.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    SidenavComponent,
    FamilySearchComponent,
    SearchResultsComponent,
    FooterComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
