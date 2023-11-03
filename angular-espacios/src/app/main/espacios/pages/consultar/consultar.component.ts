import { Component, OnInit } from '@angular/core';
import { EspaciosService } from '../../../../services/espacios.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css'],
})
export class ConsultarComponent implements OnInit {
  espacios: any = [];

  constructor(
    private espaciosService: EspaciosService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.espaciosService.findAll({}).subscribe((res) => {
      this.espacios = res;
    });
  }

  buscar(filtroBusqueda: any) {
    this.espacios = this.espaciosService
      .findAll(filtroBusqueda)
      .subscribe((res) => {
        this.espacios = res;

        if (this.espacios.length == 0) {
          this.snackBar.open('No hay datos', '', {
            duration: 1500,
          });
        }
      });
  }
}
