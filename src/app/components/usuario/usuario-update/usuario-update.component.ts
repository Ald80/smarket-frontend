import { UsuarioService } from './../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usuarioService.readById(id).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  updateUsuario(): void {
    this.usuarioService.update(this.usuario).subscribe(() => {
      console.log("Usuario atualizado");
      this.router.navigate(['/usuario']);
    });
  }

  cancel(): void {
    this.router.navigate(['/usuario']);
  }
}
