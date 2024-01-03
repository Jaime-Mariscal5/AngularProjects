import { Component } from '@angular/core';
import { layoutService } from 'projects/app-country/src/app/config/modules/Layout/layout.service';
import { searchRegion } from '../../../../application/search-region.app';
import { showRegion } from '../../../../application/show-region.app';
import { InterRegion } from '../../../../domain/interfaces/region.interface';

@Component({
  selector: 'appC-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {

  PlaceHolderRegion:string = 'Buscar por Region';
  data:InterRegion[] =[];
  NotFound:boolean = false;
  constructor(
    private readonly layoutS:layoutService,
    private searchReg: searchRegion,
    private showReg:showRegion
    ){
    layoutS.configuration = { showMenu: true, showHeader: true };
  }

  ngOnInit(): void {
    this.showReg.getRegion().subscribe((Regions)=>{
       if (Regions.length === 0) {
        this.NotFound = true;
        // Muestra tu componente de "not found"
      } else {
        // Asigna los datos a tu variable
        this.NotFound = false;
        this.data = Regions;
      }
    })
  }

  searchRegion(str:string){
    console.log("Soy tu padreee - "+str);
    this.searchReg.execute(str);
  }
  
}
