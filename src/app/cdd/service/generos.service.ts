import { Generos } from './../modelos/generos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private readonly urlAPI = '/assets/generos.json';

  constructor(private clienteDados: HttpClient) { }

  listagemGeneros() {
    return this.clienteDados.get<Generos[]>(this.urlAPI)
    .pipe(
      first(),
      delay(500),
      tap(apiGeneros => console.log(apiGeneros))
    )
  }
}


// o componente chama o metodo listagemGeneros
  // ao listar o gênero, liste, usando o construtor clienteDados, baseado no httpCliente, baseada na resposta do endpoint urlAPI
  // lá dentro dou o get no constructor, ele traz um json, uma interface
  // esta baseada na interface generos
  // nao entregue direto, dê um delay de 3 segundos

