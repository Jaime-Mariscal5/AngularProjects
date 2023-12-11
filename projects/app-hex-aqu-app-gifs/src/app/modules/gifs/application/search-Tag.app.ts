import { Injectable } from "@angular/core";
import { SearchTV } from "./validations/SearchT.validate";
import { TagHistory } from "./TagHistory.app";

//app/modules/gifs/application/search-Tag.app.ts
@Injectable()
export class SearchTag {

    constructor( private tagHistory: TagHistory) {}


    execute(str:string){

        if(str.length === 0) return
        //decirle que organize el array

        console.log("Buscar:"+str);
        // Llamar a la función de organizar historial
        this.tagHistory.OrganizeHistory(str);

        //proble mente llamar a un endpoint en el futuro 
    }

}