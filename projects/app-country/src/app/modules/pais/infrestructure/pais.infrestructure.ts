import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { InterPais } from "../domain/interfaces/pais.interface";


@Injectable()
export class paisInfrestructure {
    private ApiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) {}

    getPais(term: string): Observable<InterPais[]>{
        return this.http
        .get<InterPais[]>(`${this.ApiUrl}/name/${term}`) //retorna un obervable
        .pipe(
          catchError(() =>  of([]))
        );
    }
    
}