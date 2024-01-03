import { Inject, Injectable } from "@angular/core";
import { capitalRepository } from "../domain/repository/capital.repository";
import { capitalInfrestructure } from "../infrestructure/capital.infrastructure";
import { showCapital } from "./show-capital.app";

@Injectable()
export class SearchCap {
    //Injectar infrestructure
    capitalRepo:capitalRepository;
    constructor( @Inject(capitalInfrestructure) _capRepository: capitalRepository,
    private showC:showCapital){
        this.capitalRepo = _capRepository;
    }
    execute(str:string){
        if(str.length === 0) return;
        this.capitalRepo.getCapital(str).subscribe(( capitals ) => {
          this.showC.sendCapitals(capitals);
        });
    }

}