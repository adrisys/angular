import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'solicitudes',
    loadChildren: () =>
      import('./main/solicitudes/solicitudes.module').then(
        (m) => m.SolicitudesModule
      ),
  },
  {
    path: 'espacios',
    loadChildren: () =>
      import('./main/espacios/espacios.module').then((m) => m.EspaciosModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./main/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
