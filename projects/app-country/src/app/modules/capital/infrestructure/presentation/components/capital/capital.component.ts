import { Component } from '@angular/core';

@Component({
  selector: 'appC-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent {

  PlaceHolderCap:string = 'Buscar por Capital';
  // onEnterPresionado(valor: string) {
  //   console.log('padre Capital ejecutando', valor);
  // }

  searchByCapital(term:string){
    console.log('Desde ByCapitalPage');
    console.log(term);
  }

}
