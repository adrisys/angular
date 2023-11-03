import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Presupuesto } from '../models/presupuesto';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  url = 'http://localhost:3000/presupuestos';

  constructor(private http: HttpClient) { }

  recuperarPresupuestos(){
    return this.http.get<Presupuesto[]>(this.url);
  }

  altaPresupuesto(presupuesto: any){
    return this.http.post<Presupuesto>(this.url, presupuesto);
  }

  bajaPresupuesto(id: string | number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
