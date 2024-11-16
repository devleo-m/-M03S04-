import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  ComentarioInterface,
  SugestaoInterface,
} from '../intefaces/sugestao.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SugestaoService {
  httpClient = inject(HttpClient);
  url = 'http://localhost:8080';

  constructor() {}

  get(): Observable<SugestaoInterface[]> {
    let headers = new HttpHeaders();
    return this.httpClient.get<SugestaoInterface[]>(`${this.url}/sugestoes`, {
      headers: headers,
    });
  }

  getSugestaoById(id: number): Observable<SugestaoInterface> {
    let headers = new HttpHeaders();
    return this.httpClient.get<SugestaoInterface>(
      `${this.url}/sugestoes/${id}`,
      {
        headers: headers,
      }
    );
  }

  salvarComentario(
    sugestaoId: number,
    comentario: ComentarioInterface
  ): Observable<ComentarioInterface> {
    return this.httpClient.post<ComentarioInterface>(
      `${this.url}/sugestoes/${sugestaoId}/comentarios`,
      comentario
    );
  }
}
