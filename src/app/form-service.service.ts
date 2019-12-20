import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private url='http://157.245.137.216:8080/intercorp/clientes';
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  getList(): Observable<any>{

    return this.http.get(this.url+ '/listclientes');
  }

  getKpiClientes(): Observable<any>{

    return this.http.get(this.url+ '/kpideclientes');
  }

  save(cliente:Cliente): Observable<any>{
    return this.http.post<any>(this.url+ '/creacliente',cliente,{headers:this.httpHeaders});
  }

  delete(id:number): Observable<any>{
    return this.http.delete<Cliente>(this.url+`/${id}`,{headers:this.httpHeaders})
  }

  update(cliente:Cliente): Observable<any>{
    return this.http.put<Cliente>(this.url+`/${cliente.id}`,cliente,{headers:this.httpHeaders});
  }
}


