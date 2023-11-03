import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoCreditosComponent } from './components/dialogo-creditos/dialogo-creditos.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  creditos() {
    const dialogRef = this.dialog.open(DialogoCreditosComponent, {
      width: '50%',
    });
  }
}
