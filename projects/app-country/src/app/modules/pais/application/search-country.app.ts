import { Inject, Injectable } from "@angular/core";
import { paisRepository } from "../domain/repository/pais.repository";
import { paisInfrestructure } from "../infrestructure/pais.infrestructure";
import { showCountry } from "./show-country.app";


@Injectable()
export class searchCountry {

    paisRepo:paisRepository;
    constructor(
        @Inject(paisInfrestructure) _paisReposiotry: paisRepository,
        private showCountry:showCountry
    ){
        this.paisRepo=_paisReposiotry
    }

    execute(str:string){
        if(str.length === 0) return;
        this.paisRepo.getPais(str).subscribe(( Paises ) => {
          this.showCountry.sendCountries(Paises);
        });
    }


}