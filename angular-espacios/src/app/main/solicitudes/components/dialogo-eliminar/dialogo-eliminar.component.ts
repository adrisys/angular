import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SolicitudesService } from '../../../../services/solicitudes.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialogo-eliminar',
  templateUrl: './dialogo-eliminar.component.html',
  styleUrls: ['./dialogo-eliminar.component.css'],
})
export class DialogoEliminarComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogoEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private solicitudesService: SolicitudesService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  eliminar() {
    this.solicitudesService.delete(this.data.id).subscribe(() => {
      this.snackBar.open('Solicitud eliminada', '', {
        duration: 1500,
      });

      this.dialogRef.close();
      this.router.navigate([this.router.url]).then(() => {
        window.location.reload();
      });
    });
  }
}
