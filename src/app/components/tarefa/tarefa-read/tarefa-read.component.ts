import { Tarefa } from './../tarefa.model';
import { Component, OnInit } from '@angular/core';
import { TarefaService } from './../tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarefa-read',
  templateUrl: './tarefa-read.component.html',
  styleUrls: ['./tarefa-read.component.css']
})
export class TarefaReadComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const fk = +this.route.snapshot.paramMap.get('id');
    this.tarefaService.read(fk).subscribe(tarefas => {
      this.tarefas = tarefas;
    });
  }
}
