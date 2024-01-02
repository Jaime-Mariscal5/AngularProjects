import { Component } from '@angular/core';
import { SearchCap } from '../../../../application/search-Cap.app';
import { layoutService } from 'projects/app-country/src/app/config/modules/Layout/layout.service';

@Component({
  selector: 'appC-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent {

  PlaceHolderCap: string = 'Buscar por Capital';
  constructor(private searchCap:SearchCap,
    private readonly layoutS:layoutService,
    ){
      layoutS.configuration = { showMenu: true, showHeader: true };
    }

  searchCapital(term: string) {
    console.log("aHolaaaaaa");
    console.log('Desde ByCapitalPage:', term);
    this.searchCap.execute(term);
    console.log(this.searchCap.execute(term));
  }

}
//hola usted es la apetochha vddd