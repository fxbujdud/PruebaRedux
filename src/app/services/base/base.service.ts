import { Injectable } from '@angular/core';
import { IResponse } from "src/app/interfaces/response/response.interface";
import { Observable, Observer } from "rxjs";
import { ServicioService } from "../servicio/servicio.service";
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService{

    constructor(
        public service: ServicioService
    ) {}

    get(route: string): Observable<IResponse> {
        return Observable.create((observer: Observer<IResponse>) => {
          this.service.accionGet(route).subscribe((response: Response) => {
            observer.next({
              response: response,
              code: 200,
            });
            observer.complete();
          }, (error: Response) => {
            observer.next({
              response: error,
              code: 400,
            });
            observer.complete();
          });
        })
      }
}

