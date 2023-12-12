/**
 * dentro de la capa de infresturctura se tendra el acoplamento de lo de http
 */
 import { Injectable } from "@angular/core";
 import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Girfs } from "../domain/gifs";
import { gifRepository } from "../domain/repository/gif.repository";
import { SearchResponse } from "../interfaces/gifs.interface";

// /**dependencias que se estaran usando */
// export const ST = new SearchTag();
// //  app\modules\gifs\infrestructure\gifs.infrestructure.ts
@Injectable()
export class GifInfrestructure implements gifRepository {

    private apiKey: string = 'XoPuV5MlgUTsDn58kNYixK3mCo4PP9X9';
    private ApiUrl: string = 'http://api.giphy.com/v1/gifs' 

    constructor(private http: HttpClient){}

    getGifs(strSearch:string): Observable<SearchResponse> {
             const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit','10')
            .set('q',strSearch)
        return this.http.get<SearchResponse>(`${this.ApiUrl}/search`,{params});//retorna un obervable 
    }

}