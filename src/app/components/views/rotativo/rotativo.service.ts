import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rotativo } from './rotativo.model';

@Injectable({
  providedIn: 'root'
})
export class RotativoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

    findAll():Observable<Rotativo[]>{
      const url = `${this.baseUrl}/rotativos`
      return this.http.get<Rotativo[]>(url)
    }

    findById(id: String): Observable<Rotativo>{
      const url = `${this.baseUrl}/rotativos/${id}`
      return this.http.get<Rotativo>(url)
    }

    create(rotativo: Rotativo): Observable<Rotativo>{
      const url = `${this.baseUrl}/rotativos`
      return this.http.post<Rotativo>(url, rotativo);
    }

    delete(id: String): Observable<void>{
      const url = `${this.baseUrl}/rotativos/${id}`
      return this.http.delete<void>(url);
    }

    update(rotativo: Rotativo): Observable<void> {
      const url = `${this.baseUrl}/rotativos/${rotativo.id}`
      return this.http.put<void>(url,rotativo);
    }

    mensagem(str: String): void {
      this._snack.open(`${str}`, 'ok', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000
      })
    }

}
