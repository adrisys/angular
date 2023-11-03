import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-espacios',
  templateUrl: './tabla-espacios.component.html',
  styleUrls: ['./tabla-espacios.component.css'],
})
export class TablaEspaciosComponent implements OnInit {
  @Input() espacios: any;
  constructor() {}

  ngOnInit(): void {}
}
