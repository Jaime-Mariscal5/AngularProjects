import { Observable } from "rxjs";
import { Girfs } from "../gifs";
import { SearchResponse } from "../../interfaces/gifs.interface";
/**
 * Puerto
 */
//app\modules\gifs\domain\repository\gif.repository.ts
export interface gifRepository {
    getGifs(strSearch:string):Observable<SearchResponse>
}