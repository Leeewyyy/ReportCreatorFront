import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sighting } from 'src/sighting';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SightingService {

  private apiServerURL = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getSightings(): Observable<Sighting[]> {
    return this.http.get<Sighting[]>(`${this.apiServerURL}`);
  }

  public updateSightings(sighting: Sighting): Observable<Sighting> {
    return this.http.put<Sighting>(`${this.apiServerURL}`, sighting);
  }
}
