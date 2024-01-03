import { Observable } from "rxjs";
import { InterRegion } from "../interfaces/region.interface";


export interface regionReposiotry{
    getRegion(trem:string): Observable<InterRegion[]> 
}