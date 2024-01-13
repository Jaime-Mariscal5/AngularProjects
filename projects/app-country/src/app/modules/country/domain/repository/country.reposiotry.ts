import { Observable } from "rxjs";
import { Country } from "../interface/country.interface";

export interface countryRepository{
    getCountry(term: string , endpoint:string): Observable<Country[]>;
    getCountryByAlphaCode(code: string): Observable<Country | null> 
}