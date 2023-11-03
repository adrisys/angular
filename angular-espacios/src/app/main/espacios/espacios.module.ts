import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspaciosRoutingModule } from './espacios-routing.module';
import { ConsultarComponent } from './pages/consultar/consultar.component';
import { MaterialModule } from '../../material/material.module';
import { TablaEspaciosComponent } from './components/tabla-espacios/tabla-espacios.component';
import { FormBuscarComponent } from './components/form-buscar/form-buscar.component';

@NgModule({
  declarations: [
    ConsultarComponent,
    TablaEspaciosComponent,
    FormBuscarComponent,
  ],
  imports: [
    CommonModule,
    EspaciosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class EspaciosModule {}
