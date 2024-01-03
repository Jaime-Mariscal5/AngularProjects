import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { InterRegion } from "../domain/interfaces/region.interface";
import { regionReposiotry } from "../domain/repository/region.repository";


@Injectable()
export class regionInfrestructure implements regionReposiotry{

    private ApiUrl: string = 'https://restcountries.com/v3.1';
     constructor(private http: HttpClient) {}

     getRegion(trem:string): Observable<InterRegion[]> {
        return this.http
      .get<InterRegion[]>(`${this.ApiUrl}/region/${trem}`) //retorna un obervable
      .pipe(
        catchError(() =>  of([]))
      );
     }
    
}