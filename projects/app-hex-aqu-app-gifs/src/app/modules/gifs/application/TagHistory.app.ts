import { Injectable } from "@angular/core";
import { gifRepository } from "../domain/repository/gif.repository";
import { GifInfrestructure } from "../infrestructure/gifs.infrestructure";
import { showTag } from "./show-Tag.app";

@Injectable()
export class TagHistory {
    private history: string[] = [];

    gifRepository:gifRepository
    constructor( private gifInfrestructure: GifInfrestructure , private showT:showTag)
    { 
       this.gifRepository = this.gifInfrestructure;  
    }

    //agregar array
    addToHisotry(searchTerm:string): void{
        this.history.unshift(searchTerm);
    }

    //obtener historial
    getHistory(): string[]{
        return [...this.history]; //enviar copia
    }

    OrganizeHistory(tag:string){
        tag = tag.toLowerCase(); //hacer todo minúsculas para facilitar la busqueda
        if(this.history.includes(tag)) this.history = this.history.filter((oldTag) => oldTag !== tag);
        this.addToHisotry(tag);  //add item to array
        this.history = this.history.splice(0,10);//limite de 10 
        //llamar
        this.gifRepository.getGifs(tag).subscribe((gifs) => {
            // Manejar la respuesta de la búsqueda de gifs
            console.log(gifs);
            this.showT.sendGifs(gifs.data);
          });
    }
}