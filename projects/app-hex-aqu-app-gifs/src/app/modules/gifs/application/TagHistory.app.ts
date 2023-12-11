import { Injectable } from "@angular/core";

@Injectable()
export class TagHistory {
    private history: string[] = [];

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
    }
}