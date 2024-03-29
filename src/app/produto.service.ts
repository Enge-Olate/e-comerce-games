import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './models/Produto.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
 

  private url = "http://localhost:3000/produtos";

  constructor(private _httpCliente: HttpClient) { }

  getProduto(id: any): Observable<Produto>{

    const urlAtualizar =`${this.url}?id=${id}`;

    return this._httpCliente.get<Produto>(urlAtualizar);

  }

  getProdutos(): Observable<Produto[]>{

    return this._httpCliente.get<Produto[]>(this.url);

  }

  cadastrarProduto(produto: Produto):Observable<Produto[]>{

    return this._httpCliente.post<Produto[]>(this.url, produto);
  }
  atualizarProduto(id: any, produto: Produto): Observable<Produto[]> {
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpCliente.put<Produto[]>(urlAtualizar, produto);
  }
  removerProduto(id:any):Observable<Produto[]>{

    const urlDeletar = `${this.url}/${id}`;

    return this._httpCliente.delete<Produto[]>(urlDeletar);
  }

}
