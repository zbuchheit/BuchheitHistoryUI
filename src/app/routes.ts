import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResolver } from './shared/search-resolver.service';
import { RecordsComponent } from './records/records.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'volunteers', component: VolunteersComponent },
  { path: 'whatsnew', component: WhatsNewComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'search', component: SearchResultsComponent, resolve: {searchResults: SearchResolver} },
];
