import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SightingService } from './sighting.service';
import { AddSightingPageComponent } from './add-sighting-page/add-sighting-page.component';
import { GenerateReportPageComponent } from './generate-report-page/generate-report-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSightingPageComponent,
    GenerateReportPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SightingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
