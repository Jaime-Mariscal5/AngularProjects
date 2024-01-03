import { Inject, Injectable } from "@angular/core";
import { regionInfrestructure } from "../infrestructure/region.infrestructure";
import { regionReposiotry } from "../domain/repository/region.repository";
import { showRegion } from "./show-region.app";

@Injectable()
export class searchRegion{


    constructor(
        @Inject(regionInfrestructure) private _capRepository: regionReposiotry
        ,private showReg:showRegion
        ){}
     
        execute(str:string){
            if(str.length === 0) return;
            this._capRepository.getRegion(str).subscribe(( Regions) => {
            //    console.log(Regions);
                this.showReg.sendRegions(Regions);
              });
        }

}