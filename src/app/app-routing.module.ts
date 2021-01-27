import { TarefaUpdateComponent } from './components/tarefa/tarefa-update/tarefa-update.component';
import { TarefaDeleteComponent } from './components/tarefa/tarefa-delete/tarefa-delete.component';
import { UsuarioCrudComponent } from './components/usuario/usuario-crud/usuario-crud.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { TarefaCrudComponent } from './components/tarefa/tarefa-crud/tarefa-crud.component';
import { TarefaCreateComponent } from './components/tarefa/tarefa-create/tarefa-create.component';
import { TarefaReadComponent } from './components/tarefa/tarefa-read/tarefa-read.component';
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
  },
  {
    path: 'tarefa/:id',
    component: TarefaCrudComponent
  },
  {
    path: 'tarefa/create/:id',
    component: TarefaCreateComponent
  },
  {
    path: 'tarefa/delete/:id',
    component: TarefaDeleteComponent
  },
  {
    path: 'tarefa/update/:id',
    component: TarefaUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
