import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SolicitudesService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get(`${environment.urlEspacios}/solicitudes`);
  }

  findOne(id: any): Observable<any> {
    return this.http.get(`${environment.urlEspacios}/solicitudes/${id}`);
  }

  save(data: any): Observable<any> {
    return this.http.post(`${environment.urlEspacios}/solicitudes`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${environment.urlEspacios}/solicitudes/${id}`);
  }

  update(data: any): Observable<any> {
    return this.http.put(
      `${environment.urlEspacios}/solicitudes/${data.id}`,
      data
    );
  }
}
