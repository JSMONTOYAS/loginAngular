import { Injectable } from '@angular/core';
import { AuthRequest } from './authRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs'
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(credentials:AuthRequest):Observable<User>{
    return this.http.get<User>('././assets/data.json').pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('se ha producido un error', error.error);
    }
    else{
      console.error('Backend retorno el codigo de estado', error.status, error.error );
    }
    return throwError(() => new Error('Algo falló, por favor intente de nuevo'));
  }
}
