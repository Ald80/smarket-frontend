import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario.model'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string = "http://127.0.0.1:8000/usuario";

  constructor(private http: HttpClient) { }

  read(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }

  readById(id: number): Observable<Usuario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }

  delete(id: number): Observable<Usuario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Usuario>(url);
  }

  update(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/${usuario.id}`;
    return this.http.put<Usuario>(url, usuario);
  }
}
