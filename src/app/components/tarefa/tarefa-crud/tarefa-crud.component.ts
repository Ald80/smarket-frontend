import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarefa-crud',
  templateUrl: './tarefa-crud.component.html',
  styleUrls: ['./tarefa-crud.component.css']
})
export class TarefaCrudComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToTarefaCreate(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate([`tarefa/create/${id}`]);
  }
}
