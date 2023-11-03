import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FootbarComponent } from './footbar/footbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { DialogoCreditosComponent } from './sidebar/components/dialogo-creditos/dialogo-creditos.component';

@NgModule({
  declarations: [SidebarComponent, FootbarComponent, DialogoCreditosComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [SidebarComponent, FootbarComponent],
})
export class SharedModule {}
