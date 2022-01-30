import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rotativo } from '../rotativo/rotativo.model';
import { Veiculo } from './veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

    findAll():Observable<Veiculo[]>{
      const url = `${this.baseUrl}/veiculos`
      return this.http.get<Veiculo[]>(url)
    }

    findById(id: String): Observable<Veiculo>{
      const url = `${this.baseUrl}/veiculos/${id}`
      return this.http.get<Veiculo>(url)
    }

    findByPessoa(id_pessoa: String): Observable<Veiculo[]>{
      const url = `${this.baseUrl}/veiculos/pessoa?pessoa=${id_pessoa}`
      return this.http.get<Veiculo[]>(url)
    }

    findByRotativo(id_rotativo: String): Observable<Veiculo[]>{
      const url = `${this.baseUrl}/veiculos/rotativo?rotativo=${id_rotativo}`
      return this.http.get<Veiculo[]>(url)
    }

    findByEstacionado():Observable<Veiculo[]>{
      const url = `${this.baseUrl}/veiculos/estacionado`
      return this.http.get<Veiculo[]>(url)
    }

    findByNaoEstacionado():Observable<Veiculo[]>{
      const url = `${this.baseUrl}/veiculos/naoestacionado`
      return this.http.get<Veiculo[]>(url)
    }
    
    create(veiculo: Veiculo, id_pessoa:String): Observable<Veiculo>{
      const url = `${this.baseUrl}/veiculos/pessoa?pessoa=${id_pessoa}`
      return this.http.post<Veiculo>(url, veiculo)
    }

    update(veiculo: Veiculo): Observable<void> {
      const url = `${this.baseUrl}/veiculos/${veiculo.id}`
      return this.http.put<void>(url,veiculo);
    }

    updateByRotativo(veiculo: Veiculo, id_rotativo: String): Observable<void> {
      const url = `${this.baseUrl}/veiculos/rotativo?rotativo=${id_rotativo}`
      return this.http.put<void>(url,veiculo);
    }

    delete(id: String): Observable<void>{
      const url = `${this.baseUrl}/veiculos/${id}`
      return this.http.delete<void>(url);
    }

    mensagem(str: String): void {
      this._snack.open(`${str}`, 'ok', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000
      })
    }

}
