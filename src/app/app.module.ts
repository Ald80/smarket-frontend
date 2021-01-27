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
import { HttpClientModule } from '@angular/common/http';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { TarefaCrudComponent } from './components/tarefa/tarefa-crud/tarefa-crud.component';
import { TarefaReadComponent } from './components/tarefa/tarefa-read/tarefa-read.component';
import { TarefaCreateComponent } from './components/tarefa/tarefa-create/tarefa-create.component';
import { TarefaDeleteComponent } from './components/tarefa/tarefa-delete/tarefa-delete.component';
import { TarefaUpdateComponent } from './components/tarefa/tarefa-update/tarefa-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    UsuarioReadComponent,
    HomeComponent,
    UsuarioCrudComponent,
    UsuarioCreateComponent,
    UsuarioDeleteComponent,
    UsuarioUpdateComponent,
    TarefaCrudComponent,
    TarefaReadComponent,
    TarefaCreateComponent,
    TarefaDeleteComponent,
    TarefaUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
