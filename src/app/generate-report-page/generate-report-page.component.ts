import { Component, OnInit } from '@angular/core';
import { Sighting } from 'src/sighting';
import { SightingService } from 'src/app/sighting.service';

@Component({
  selector: 'app-generate-report-page',
  templateUrl: './generate-report-page.component.html',
  styleUrls: ['./generate-report-page.component.css']
})
  
export class GenerateReportPageComponent implements OnInit{

  public sightings: Sighting[] = [];
  public preparedSightings: Sighting[] = [];
  public listReady: boolean = false;
  public showError: boolean = false;
  public numberIDs: number[] = [];
  public givenSplitedIDs: string[] = [];
  public wrongIDs: number[] = [];
  public existingIDs: number[] = [];
  public sightingCountMap = new Map();
  public writtenOnScreenIDs: number[] = [];

  constructor(private sightingService: SightingService) { }

  ngOnInit(): void {
    this.getSightings();
  }

  public getSightings(): void {
    this.sightingService.getSightings().subscribe({
      next: (value: Sighting[]) => this.sightings = value
    })
  }

  public generate(givenIDs: string): void {

    this.preparedSightings = [];
    this.listReady = false;
    this.showError = false;
    this.numberIDs = [];
    this.givenSplitedIDs = [];
    this.wrongIDs = [];
    this.existingIDs = [];
    this.sightingCountMap.clear();
    this.writtenOnScreenIDs = [];

    this.prepareListOfExistingIDs();
    this.prepareRequestedIDs(givenIDs);
    
    if (this.checkIds()) {
      for (let i = 0; i < this.writtenOnScreenIDs.length; i++){
        for (let j = 0; j < this.sightings.length; j++){
          if (this.writtenOnScreenIDs[i] == this.sightings[j].id) {
            this.preparedSightings.push(this.sightings[j]);
          }
        }
      }
      this.listReady = true;
    }
    else {
      this.showError = true;
    }
  }

  public prepareRequestedIDs(givenIDs: string): void {
    this.givenSplitedIDs = givenIDs.split(/[,;\s]+/);

    for (let i = 0; i < this.givenSplitedIDs.length; i++) {
      this.numberIDs.push(Number(this.givenSplitedIDs[i]));
    }
  }

  public prepareListOfExistingIDs(): void {
    for (let i = 0; i < this.sightings.length; i++) {
      this.existingIDs.push(Number(this.sightings[i].id));
    }
  }

  public checkIds(): boolean {
    for (let i = 0; i < this.numberIDs.length; i++) {
      if (!this.existingIDs.includes(this.numberIDs[i])) this.wrongIDs.push(this.numberIDs[i]);
      else if (this.sightingCountMap.has(this.numberIDs[i])) {
        this.sightingCountMap.set(this.numberIDs[i], this.sightingCountMap.get(this.numberIDs[i]) + 1);
      }
      else {
        this.sightingCountMap.set(this.numberIDs[i], 1);
        this.writtenOnScreenIDs.push(this.numberIDs[i]);
      }
    }

    if (this.wrongIDs.length > 0) return false;
    return true;
  }
}