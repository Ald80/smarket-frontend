import { UsuarioCrudComponent } from './components/usuario/usuario-crud/usuario-crud.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: "",
    component: HomeComponent
  },
  {
    path: "usuario",
    component: UsuarioCrudComponent 
  },
  {
    path: 'usuario/create',
    component: UsuarioCreateComponent
  },
  {
    path: 'usuario/delete/:id',
    component: UsuarioDeleteComponent
  },
  {
    path: 'usuario/update/:id',
    component: UsuarioUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
