import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EspaciosService {
  constructor(private http: HttpClient) {}

  findAll(filtroBusqueda: any): Observable<any> {
    let filtroRequest = '';

    if (filtroBusqueda.start) {
      filtroRequest = filtroRequest.concat(`&start=${filtroBusqueda.start}`);
    }

    if (filtroBusqueda.end) {
      filtroRequest = filtroRequest.concat(`&end=${filtroBusqueda.end}`);
    }

    if (filtroBusqueda.horaInicio) {
      filtroRequest = filtroRequest.concat(
        `&horaInicio=${filtroBusqueda.horaInicio}`
      );
    }
    if (filtroBusqueda.horaFin) {
      filtroRequest = filtroRequest.concat(
        `&horaFin=${filtroBusqueda.horaFin}`
      );
    }
    if (filtroBusqueda.edificio) {
      filtroRequest = filtroRequest.concat(
        `&edificio=${filtroBusqueda.edificio}`
      );
    }
    if (filtroBusqueda.aula) {
      filtroRequest = filtroRequest.concat(`&aula=${filtroBusqueda.aula}`);
    }

    return this.http.get(
      `${environment.urlEspacios}/espacios?_sort=fecha${filtroRequest}`
    );
  }
}
