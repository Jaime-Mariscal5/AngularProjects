import { Inject, Injectable } from "@angular/core";
import { gifRepository } from "../domain/repository/gif.repository";
import { GifInfrestructure } from "../infrestructure/gifs.infrestructure";
import { showTag } from "./show-Tag.app";

@Injectable()
export class TagHistory {
    private history: string[] = [];


    
    //Mal -> private gifInfrestructure: GifInfrestructure 
    /**
     * PROFESSOR COMMENT
     * coloca la inyección de gitRepository y no la de GitInfrestructure. 
     * Si bien en la primera línea de este método estás asignando la inyección a la propiedad gifRepository, 
     * el concepto es que no debes inyectar la implementación sino la abstracción.
     * X ->  constructor( private gifInfrestructure: GifInfrestructure , private showT:showTag )
     */
    gifRepository:gifRepository
    constructor( @Inject(GifInfrestructure) _gifRepository: gifRepository, private showT:showTag )
    { 
       this.gifRepository = _gifRepository;  
       if(this.gifRepository.loadLocalStorage().length){
           this.history = this.gifRepository.loadLocalStorage();
           this.OrganizeHistory(this.history[0]);
       }
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
        this.gifRepository.saveList([...this.history]);//guardar localstorage
        this.gifRepository.getGifs(tag).subscribe((gifs) => {
            this.showT.sendGifs(gifs.data);
        });
    }
}