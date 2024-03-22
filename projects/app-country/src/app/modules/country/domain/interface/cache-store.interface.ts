import { Country } from "./country.interface";


export interface CacheStore {
    byCapital:TermCountries;
    byCountries:TermCountries;
    
}


export interface TermCountries {
    term: string;
    Countries: Country[]
}