import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(
    public http: HttpClient
  ) { }

  accionGet<T>(route: string): Observable<T> {
    return this.http.get<T>(`${environment.url}/${route}`);
  }

  accionPost<T>(route: string, data: T): Observable<T> {
    return this.http.post<T>('url', data);
  }
  
}
