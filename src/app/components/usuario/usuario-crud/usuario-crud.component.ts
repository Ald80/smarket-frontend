import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-crud',
  templateUrl: './usuario-crud.component.html',
  styleUrls: ['./usuario-crud.component.css']
})
export class UsuarioCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToUsuarioCreate(): void {
    this.router.navigate(['usuario/create']);
  }
}
