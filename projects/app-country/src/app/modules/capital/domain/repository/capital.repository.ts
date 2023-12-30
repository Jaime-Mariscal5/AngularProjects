import { Observable } from "rxjs";
import { InterCapital } from "../interfaces/capital.interface";

export interface capitalRepository {
    getCapital(term:string): Observable<InterCapital[]>
}