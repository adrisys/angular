import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor(private http: HttpClient) {}

  findOne(email: any): Observable<any> {
    return this.http.get(`${environment.urlPersonas}?email=${email}`);
  }
}
