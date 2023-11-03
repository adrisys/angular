import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-creditos',
  templateUrl: './dialogo-creditos.component.html',
  styleUrls: ['./dialogo-creditos.component.css'],
})
export class DialogoCreditosComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogoCreditosComponent>) {}

  ngOnInit(): void {}

  aceptar() {
    console.log('Pulsaste Aceptar');
    this.dialogRef.close();
  }
}
