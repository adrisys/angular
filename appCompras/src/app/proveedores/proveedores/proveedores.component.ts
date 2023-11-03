import { ProveedoresService } from './../../services/proveedores.service';
import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit{

  proveedores!: Proveedor[];

  constructor(private proveedoresService: ProveedoresService){}

  ngOnInit(): void {
    this.recuperar();
  }

  recuperar(){
    this.proveedoresService.recuperarProveedores().subscribe(result => this.proveedores = result);
  }

  bajaProveedor(prov: Proveedor){
    if(confirm('Va a eliminar el presupuesto '+prov.nombre)){
      this.proveedoresService.bajaProveedor(prov.id).subscribe((data) => {
        this.recuperar();
      }
      );
    }
  }

}
