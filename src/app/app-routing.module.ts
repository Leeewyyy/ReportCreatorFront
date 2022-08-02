import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSightingPageComponent } from './add-sighting-page/add-sighting-page.component';
import { GenerateReportPageComponent } from './generate-report-page/generate-report-page.component';
import { GenerateReportListComponent } from './generate-report-list/generate-report-list.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'add', component: AddSightingPageComponent },
  { path: 'generate', component: GenerateReportPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
