import { PresupuestosService } from 'src/app/services/presupuestos.service';
import { Presupuesto } from './../../models/presupuesto';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css']
})
export class AddpresComponent {

  presupuesto!: Presupuesto;
  tipos: string[] = ["0","0.04", "0.10","0.21"];

  constructor(private prespuestoService: PresupuestosService, private route: Router){
    this.presupuesto = {
      id:0,
      proveedor: "",
      fecha:"",
      concepto:"",
      base:0,
      tipo: "",
      iva:0,
      total:0
    }
  }

  modificarTipo(event: any) {
    this.presupuesto.tipo = event.target.value;
  }

  altaPresupuesto(){
    this.presupuesto.iva = this.presupuesto.base * parseFloat(this.presupuesto.tipo);
    this.presupuesto.total = this.presupuesto.base + (this.presupuesto.base *
      parseFloat(this.presupuesto.tipo));
    this.prespuestoService.altaPresupuesto(this.presupuesto).subscribe((datos:any) => {
      if(datos){
        alert("Presupuesto insertado");
        this.route.navigate(['presupuestos'])
      }
    })
  }


}
