/**
 * dentro de la capa de infresturctura se tendra el acoplamento de lo de http
 */
 import { Injectable } from "@angular/core";
 import { HttpClient, HttpParams } from "@angular/common/http";

// /**dependencias que se estaran usando */
// export const ST = new SearchTag();
// //
@Injectable()
export class GifInfrestructure {

    private apiKey: string = 'XoPuV5MlgUTsDn58kNYixK3mCo4PP9X9';
    private ApiUrl: string = 'http://api.giphy.com/v1/gifs' 

    constructor(private http: HttpClient){}

    // constructor(){

    // }

    

    getGif(){


        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit','10')
            .set('q','test')


        this.http.get(`${this.ApiUrl}/search`,{params})
        .subscribe( res => {
            console.log(res);
        })
    }

}