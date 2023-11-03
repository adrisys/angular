import { Proveedor } from './../models/proveedor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  url = 'http://localhost:3000/proveedores';

  constructor(private http: HttpClient) { }

  recuperarProveedores(): Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>(`${this.url}`)
  }

  altaProveedor(proveedor : Proveedor): Observable<Proveedor>{
    return this.http.post<Proveedor>(`${this.url}`,proveedor);
  }

  bajaProveedor(id: string | number){
    return this.http.delete(`${this.url}/${id}`);
  }

}
