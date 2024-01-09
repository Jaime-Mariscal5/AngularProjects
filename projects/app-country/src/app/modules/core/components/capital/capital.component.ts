import { Component, OnInit } from '@angular/core';
import { layoutService } from 'projects/app-country/src/app/config/modules/Layout/layout.service';
import { searchCountry } from '../../../country/application/search-country.app';
import { showCountry } from '../../../country/application/show-country.app';
import { Country } from '../../../country/domain/interface/country.interface';

@Component({
  selector: 'appC-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent {

  NotFound:boolean = false;
  PlaceHolderCap: string = 'Buscar por Capital';
  data:Country[] = [];
  constructor(
    private searchCap:searchCountry,
    private readonly layoutS:layoutService,
    private showCountry:showCountry
    ){
      layoutS.configuration = { showMenu: true, showHeader: true };
    }
  ngOnInit(): void {
    this.showCountry.getCountry().subscribe((capitals)=>{
       if (capitals.length === 0) {
        this.NotFound = true;
        // Muestra tu componente de "not found"
      } else {
        // Asigna los datos a tu variable
        this.NotFound = false;
        this.data = capitals;
      }
     
    })
  }

  searchCapital(term: string) {
    this.searchCap.execute(term , 'ByCapital');
  }

}
//hola usted es la apetochha vddd