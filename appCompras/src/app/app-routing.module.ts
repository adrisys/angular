import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "proveedores", component: ProveedoresComponent},
  {path: "addprovee", component: AddproveeComponent},
  {path: "presupuestos", component: PresupuestosComponent},
  {path: "addpres", component: AddpresComponent},
  {path: "", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
