import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-buscar',
  templateUrl: './form-buscar.component.html',
  styleUrls: ['./form-buscar.component.css'],
})
export class FormBuscarComponent implements OnInit {
  @Output() onSearchEspacio = new EventEmitter();

  filtroBusqueda: any;

  formBuscarEspacio: FormGroup = this.fb.group({
    start: [,],
    end: [,],
    horaInicio: [,],
    horaFin: [,],
    edificio: [,],
    aula: [,],
    busqueda: [,],
  });

  hours = Array.from(Array(24).keys());

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  buscar() {
    this.filtroBusqueda = {
      start: this.formBuscarEspacio.controls['start'].value,
      end: this.formBuscarEspacio.controls['end'].value,
      horaInicio: this.formBuscarEspacio.controls['horaInicio'].value,
      horaFin: this.formBuscarEspacio.controls['horaFin'].value,
      edificio: this.formBuscarEspacio.controls['edificio'].value,
      aula: this.formBuscarEspacio.controls['aula'].value,
    };
    this.onSearchEspacio.emit(this.filtroBusqueda);
  }
}
