import { Tarefa } from './../tarefa.model';
import { Usuario } from './../../usuario/usuario.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../../usuario/usuario.service';
import { TarefaService } from './../tarefa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa-update',
  templateUrl: './tarefa-update.component.html',
  styleUrls: ['./tarefa-update.component.css']
})
export class TarefaUpdateComponent implements OnInit {

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

  updateTarefa(): void {
    this.tarefaService.update(this.tarefa).subscribe(() => {
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
