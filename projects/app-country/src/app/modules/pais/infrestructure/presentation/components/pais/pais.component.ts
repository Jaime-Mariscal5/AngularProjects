import { Component } from '@angular/core';
import { layoutService } from 'projects/app-country/src/app/config/modules/Layout/layout.service';

@Component({
  selector: 'appC-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent {
  PlaceHolderCountry:string = 'Buscar por País';
  constructor(private readonly layoutS:layoutService){
      layoutS.configuration = { showMenu: true, showHeader: true };
    }


}
