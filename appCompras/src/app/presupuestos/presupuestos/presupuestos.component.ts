import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Presupuesto } from 'src/app/models/presupuesto';
import { PresupuestosService } from 'src/app/services/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {

  presupuestos!: Presupuesto[];
  presupuesto!: Presupuesto;

  constructor(private presupuestoService: PresupuestosService, private route: Router){}

  ngOnInit(): void {
    this.recuperarPresupuestos();
  }

  recuperarPresupuestos(){
    this.presupuestoService.recuperarPresupuestos().subscribe(result => this.presupuestos = result);
  }

  bajaPresupuesto(presu: Presupuesto){
    if(confirm('Va a eliminar el presupuesto '+presu.concepto)){
      this.presupuestoService.bajaPresupuesto(presu.id).subscribe((data) => {
        this.recuperarPresupuestos();
      }
      );
    }
  }
}
