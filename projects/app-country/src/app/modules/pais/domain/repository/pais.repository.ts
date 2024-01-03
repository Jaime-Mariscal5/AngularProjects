import { Observable } from "rxjs";
import { InterPais } from "../interfaces/pais.interface";


export interface paisRepository{
    getPais(term: string): Observable<InterPais[]> 
}