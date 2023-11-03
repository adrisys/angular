import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './pages/crear/crear.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'crear', component: CrearComponent },
      { path: 'consultar', component: ConsultarComponent },
      { path: 'editar/:id', component: CrearComponent },
      { path: '', redirectTo: 'consultar' },
    ],
  },
  {
    path: '**',
    redirectTo: 'crear',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesRoutingModule {}
