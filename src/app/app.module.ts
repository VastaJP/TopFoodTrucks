import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventosComponent } from './components/eventos/eventos.component';
import { RegistrarEventosComponent } from './components/eventos/registrar-eventos/registrar-eventos.component';
import { RegistrarUsuariosComponent } from './components/usuarios/registrar-usuarios/registrar-usuarios.component';
import { QuienesSomosComponent } from './components/usuarios/registrar-usuarios/quienesSomos/quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    RegistrarEventosComponent,
    RegistrarUsuariosComponent,
    QuienesSomosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
