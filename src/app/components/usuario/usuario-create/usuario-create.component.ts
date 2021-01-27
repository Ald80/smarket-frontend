import { Router } from '@angular/router';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './../usuario.model'
 
@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
    nome: ''
  };

  constructor(private usuarioService: UsuarioService,
      private router: Router) { }

  ngOnInit(): void {
  }

  createUsuario(): void {
    this.usuarioService.create(this.usuario).subscribe(() => {
      this.router.navigate(['/usuario']);
    });
  }

  cancel(): void {
    this.router.navigate(['/usuario']);
  }
}
