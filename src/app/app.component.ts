import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sighting } from 'src/sighting';
import { SightingService } from './sighting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent implements OnInit {
  
  public sightings: Sighting[] = [];

  constructor(private sightingService: SightingService) { }

  ngOnInit(): void {
    this.getSightings();
  }

  public getSightings(): void {
    //   this.sightingService.getSightings().subscribe(
    //     (response: Sighting[]) => {
    //       this.sightings = response;
    //     },
    //     (error: HttpErrorResponse) => {
    //       alert(error.message)
    //     }
    //   )
    // }

    this.sightingService.getSightings().subscribe({
      next: (value: Sighting[]) => this.sightings = value,
      error: (error: any) => alert(error.message)
    })
  }
}
