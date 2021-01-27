import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  baseUrl: string = "http://127.0.0.1:8000/tarefa";

  constructor(private http: HttpClient) { }

  read(fk: number): Observable<Tarefa[]> {
    const url = `${this.baseUrl}-usuario/${fk}`;
    return this.http.get<Tarefa[]>(url);
  }

  create(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.baseUrl, tarefa);
  }

  readById(id: number): Observable<Tarefa> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Tarefa>(url);
  }

  delete(id: number): Observable<Tarefa> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Tarefa>(url);
  }

  update(tarefa: Tarefa): Observable<Tarefa> {
    const url = `${this.baseUrl}/${tarefa.id}`;
    return this.http.put<Tarefa>(url, tarefa);
  }
}
