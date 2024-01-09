import { Component } from '@angular/core';
import { layoutService } from 'projects/app-country/src/app/config/modules/Layout/layout.service';
import { searchCountry } from '../../../country/application/search-country.app';
import { showCountry } from '../../../country/application/show-country.app';
import { Country } from '../../../country/domain/interface/country.interface';


@Component({
  selector: 'appC-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent {
  PlaceHolderCountry:string = 'Buscar por País';
  NotFound:boolean = false;
  data:Country[] = [];
  constructor(
    private readonly layoutS:layoutService,
    private searchCountry:searchCountry,
    private showCountry:showCountry
   // private showCountry: showCountry
    ){
      layoutS.configuration = { showMenu: true, showHeader: true };
    }

    ngOnInit(): void {
      this.showCountry.getCountry().subscribe((paises)=>{
         if (paises.length === 0) {
          this.NotFound = true;
          // Muestra tu componente de "not found"
        } else {
          // Asigna los datos a tu variable
          this.NotFound = false;
          this.data = paises;
        }
       
      })
    }

    searchPais(str:string){
      this.searchCountry.execute(str , 'ByName');
    }


}
