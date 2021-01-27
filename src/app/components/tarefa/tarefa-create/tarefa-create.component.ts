import { Usuario } from './../../usuario/usuario.model';
import { UsuarioService } from './../../usuario/usuario.service';
import { TarefaService } from './../tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from './../tarefa.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarefa-create',
  templateUrl: './tarefa-create.component.html',
  styleUrls: ['./tarefa-create.component.css']
})
export class TarefaCreateComponent implements OnInit {

  tarefa: Tarefa = {
    descricao: ''
  }

  usuario: Usuario;
  id: number;

  constructor(
    private tarefaService: TarefaService,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.usuarioService.readById(this.id).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  createTarefa(): void {
    this.tarefa.user = this.id;
    this.tarefaService.create(this.tarefa).subscribe(() => {
      this.router.navigate([`tarefa/${this.id}`]);
    })
  }

  cancel(): void {
    this.router.navigate([`tarefa/${this.id}`]);
  }
}
