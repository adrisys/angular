import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { ConsultarComponent } from './pages/consultar/consultar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogoEliminarComponent } from './components/dialogo-eliminar/dialogo-eliminar.component';

@NgModule({
  declarations: [ConsultarComponent, CrearComponent, DialogoEliminarComponent],
  imports: [
    CommonModule,
    SolicitudesRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class SolicitudesModule {}
