import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { countryRepository } from '../domain/repository/country.reposiotry';
import { Country } from '../domain/interface/country.interface';

@Injectable()
export class countryInfrestructure implements countryRepository {
  private ApiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getCountry(term: string, endpoint: string): Observable<Country[]  > {
    return this.http.get<Country[]>(`${this.ApiUrl}/${endpoint}/${term}`).pipe(
      catchError(() => of([]))
    );
  }

  // getCountryAlphaCode(code:string): Observable<Country | null>{
  //   return this.http
  //   .get<Country[]>(`${this.ApiUrl}/alpha/${code}`)
  //   .pipe(
  //     map(countries => countries.length > 0 ? countries[0] : null)
  //     catchError(() => of([])));
  // }

  getCountryByAlphaCode(code: string): Observable<Country | null> {
    const endpoint = `alpha/${code}`;
    const url = `${this.ApiUrl}/${endpoint}`
    return this.http.get<Country[]>(url).pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() => of(null)));
  }
}
