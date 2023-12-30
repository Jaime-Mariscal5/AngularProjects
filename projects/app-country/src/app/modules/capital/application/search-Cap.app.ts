import { Inject, Injectable } from "@angular/core";
import { capitalRepository } from "../domain/repository/capital.repository";
import { capitalInfrestructure } from "../infrestructure/capital.infrastructure";

@Injectable()
export class SearchCap {
    //Injectar infrestructure
    capitalRepo:capitalRepository;
    constructor( @Inject(capitalInfrestructure) _capRepository: capitalRepository){
        this.capitalRepo = _capRepository;
    }
    execute(str:string){
        if(str.length === 0) return;
        console.log(this.capitalRepo.getCapital(str));
        this.capitalRepo.getCapital(str).subscribe(( capitals ) => {
            console.log(capitals);
        });
    }

}