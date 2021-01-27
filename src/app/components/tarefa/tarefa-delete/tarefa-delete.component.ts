import { Tarefa } from './../tarefa.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../../usuario/usuario.service';
import { TarefaService } from './../tarefa.service';
import { Usuario } from './../../usuario/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa-delete',
  templateUrl: './tarefa-delete.component.html',
  styleUrls: ['./tarefa-delete.component.css']
})
export class TarefaDeleteComponent implements OnInit {

  tarefa: Tarefa;

  usuario: Usuario;
  id: number;

  constructor(
    private tarefaService: TarefaService,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const fk = +this.route.snapshot.paramMap.get('id');
    this.tarefaService.readById(fk).subscribe(tarefa => {
      this.tarefa = tarefa;
      this.getUsuarios();
    });
  }

  deleteTarefa(): void {
    this.tarefaService.delete(this.tarefa.id).subscribe(() => {
      this.router.navigate([`tarefa/${this.id}`]);
    });
  }

  getUsuarios(): void {
    this.id = this.tarefa.user;
    this.usuarioService.readById(this.id).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  cancel(): void {
    this.router.navigate([`tarefa/${this.id}`]);
  }
}
