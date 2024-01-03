import { Injectable } from '@angular/core';
import { capitalRepository } from '../domain/repository/capital.repository';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InterCapital } from '../domain/interfaces/capital.interface';

@Injectable()
export class capitalInfrestructure implements capitalRepository {
  //capital/{capital}'
  private ApiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getCapital(term: string): Observable<InterCapital[]> {
    return this.http
      .get<InterCapital[]>(`${this.ApiUrl}/capital/${term}`) //retorna un obervable
      .pipe(
        catchError(() =>  of([]))
      );
  }
}
