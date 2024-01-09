import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { countryRepository } from '../domain/repository/country.reposiotry';
import { Country } from '../domain/interface/country.interface';

@Injectable()
export class countryInfrestructure implements countryRepository {
  private ApiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getCountry(term: string, endpoint: string): Observable<Country[]  > {
    return this.http.get<Country[]>(`${this.ApiUrl}/${endpoint}/${term}`).pipe(
      catchError(() => of([])),
      // map((data: Country[]) => {
      //   console.log(data[0]);
      //   if (endpoint === 'alpha') return data[0];
      //   return data;
      // })
    );
  }

  // getCountryAlphaCode(code:string): Observable<Country | null>{
  //   return this.http
  //   .get<Country[]>(`${this.ApiUrl}/alpha/${code}`)
  //   .pipe(
  //     map(countries => countries.length > 0 ? countries[0] : null)
  //     catchError(() => of([])));
  // }
}
