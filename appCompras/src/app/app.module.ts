import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AddproveeComponent,
    ProveedoresComponent,
    PresupuestosComponent,
    AddpresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
