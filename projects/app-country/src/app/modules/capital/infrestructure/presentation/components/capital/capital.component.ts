import { Component, OnInit } from '@angular/core';
import { SearchCap } from '../../../../application/search-Cap.app';
import { layoutService } from 'projects/app-country/src/app/config/modules/Layout/layout.service';
import { showCapital } from '../../../../application/show-capital.app';
import { Capital } from '../../../../domain/capital';
import { InterCapital } from '../../../../domain/interfaces/capital.interface';

@Component({
  selector: 'appC-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent {

  NotFound:boolean = false;
  PlaceHolderCap: string = 'Buscar por Capital';
  data:InterCapital[] = [];
  constructor(private searchCap:SearchCap,
    private readonly layoutS:layoutService,
    private showCap:showCapital
    ){
      layoutS.configuration = { showMenu: true, showHeader: true };
    }
  ngOnInit(): void {
    this.showCap.getCapital().subscribe((capitals)=>{
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
    this.searchCap.execute(term);
    console.log(this.searchCap.execute(term));
  }

}
//hola usted es la apetochha vddd