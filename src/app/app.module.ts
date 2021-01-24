import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/templates/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/templates/header/header.component';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioCrudComponent } from './components/usuario/usuario-crud/usuario-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    UsuarioReadComponent,
    HomeComponent,
    UsuarioCrudComponent
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
