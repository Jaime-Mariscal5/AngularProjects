import { Observable } from "rxjs";
import { Country } from "../interface/country.interface";

export interface countryRepository{
    getCountry(term: string , endpoint:string): Observable<Country[]>;
    // getCountryAlphaCode(code:string): Observable<Country | null>;
}