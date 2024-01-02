import { Component } from '@angular/core';
import { layoutService } from 'projects/app-country/src/app/config/modules/Layout/layout.service';

@Component({
  selector: 'appC-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {

  PlaceHolderRegion:string = 'Buscar por Region';
  constructor(private readonly layoutS:layoutService){
    layoutS.configuration = { showMenu: true, showHeader: true };
  }


}
