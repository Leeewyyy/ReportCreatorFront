import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SightingService } from '../sighting.service';

@Component({
  selector: 'app-add-sighting-page',
  templateUrl: './add-sighting-page.component.html',
  styleUrls: ['./add-sighting-page.component.css']
})
export class AddSightingPageComponent {

  public showMsg: boolean = false;

  constructor(private sightingService: SightingService) { }

  public sendSighting(form: NgForm): void {
    this.sightingService.updateSightings(form.value).subscribe();
    this.showMsg = true;
    form.reset();
  }
}
