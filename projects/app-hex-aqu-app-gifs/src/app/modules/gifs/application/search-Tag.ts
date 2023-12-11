import { Injectable } from "@angular/core";


@Injectable()
export class SearchTag {

    execute(str:string){
        console.log("Buscar:"+str);
    }

}