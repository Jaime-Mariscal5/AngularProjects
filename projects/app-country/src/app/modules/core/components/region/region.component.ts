import { Component } from '@angular/core';
import { layoutService } from 'projects/app-country/src/app/config/modules/Layout/layout.service';
import { searchCountry } from '../../../country/application/search-country.app';
import { showCountry } from '../../../country/application/show-country.app';
import { Country } from '../../../country/domain/interface/country.interface';

@Component({
  selector: 'appC-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {

  PlaceHolderRegion:string = 'Buscar por Region';
  data:Country[] =[];
  NotFound:boolean = false;
  constructor(
    private readonly layoutS:layoutService,
    private searchCountry:searchCountry,
    private showCountry:showCountry
    ){
    layoutS.configuration = { showMenu: true, showHeader: true };
  }

  ngOnInit(): void {
    this.showCountry.getCountry().subscribe((countries)=>{
       if (countries.length === 0) {
        this.NotFound = true;
      } else {
        this.NotFound = false;
        this.data = countries;
      }
    })
  }

  searchRegion(region: string): void {
    this.searchCountry.execute(region, 'ByRegion');
  }
  
}
