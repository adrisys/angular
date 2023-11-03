import { ProveedoresService } from 'src/app/services/proveedores.service';
import { Proveedor } from './../../models/proveedor';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent {

  proveedor!: Proveedor;

  provincias: string[] = ['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
  'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
  'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
  'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
  'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza']


  constructor(private servicioProveedores: ProveedoresService, private route: Router){
    this.proveedor = {
      id:0,
      nombre:"",
      cif:"",
      direccion:"",
      cp:"",
      localidad:"",
      provincia: "",
      telefono: 0,
      email: "",
      contacto: ""
    }

  }

  altaProveedor(){
    this.servicioProveedores.altaProveedor(this.proveedor).subscribe((datos:any) => {
      if(datos){
        alert("Proveedor insertado");
        this.route.navigate(['proveedores']);
      }
    })
  }
}
