import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../../../services/solicitudes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogoEliminarComponent } from '../../components/dialogo-eliminar/dialogo-eliminar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css'],
})
export class ConsultarComponent implements OnInit {
  solicitudes: any = [];

  dataSource: any = [];
  displayedColumns = ['nombre', 'cargo', 'unidad', 'telefono', 'acciones'];

  constructor(
    private solicitudesService: SolicitudesService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.solicitudesService.findAll().subscribe((res) => {
      this.dataSource = res;
      if (this.dataSource.length == 0) {
        this.snackBar.open('No hay solicitudes', '', {
          duration: 1500,
        });
      }
    });
  }

  editar(element: any) {
    this.router.navigate([`/solicitudes/editar/${element.id}`]);
  }

  eliminar(element: any) {
    this.dialog.open(DialogoEliminarComponent, {
      data: element,
    });
  }
}
