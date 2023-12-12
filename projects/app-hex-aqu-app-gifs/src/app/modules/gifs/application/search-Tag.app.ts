import { Injectable, inject } from "@angular/core";
import { TagHistory } from "./TagHistory.app";
import { gifRepository } from "../domain/repository/gif.repository";
import { GifInfrestructure } from "../infrestructure/gifs.infrestructure";
import { Girfs } from "../domain/gifs";

//app/modules/gifs/application/search-Tag.app.ts
@Injectable()
export class SearchTag {

    constructor(  private tagHistory: TagHistory) {   }

    execute(str:string){
        if(str.length === 0) return
        // Llamar a la función de organizar historial
        this.tagHistory.OrganizeHistory(str);
    }

}