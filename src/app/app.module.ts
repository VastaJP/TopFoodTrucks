import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventosComponent } from './components/eventos/eventos.component';
import { RegistrarEventosComponent } from './components/eventos/registrar.eventos/registrar-eventos/registrar-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    RegistrarEventosComponent,
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
