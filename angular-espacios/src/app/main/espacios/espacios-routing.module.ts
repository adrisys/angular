import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarComponent } from './pages/consultar/consultar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'consultar', component: ConsultarComponent },
      { path: '', redirectTo: 'consultar' },
    ],
  },
  {
    path: '**',
    redirectTo: 'consultar',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspaciosRoutingModule {}
