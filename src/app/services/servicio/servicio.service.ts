import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(
    public http: HttpClient
  ) { }

  accionGet<T>(route: string): Observable<T> {
    return this.http.get<T>('url');
  }

  accionPost<T>(route: string, data: T): Observable<T> {
    return this.http.post<T>('url', data);
  }
  
}
