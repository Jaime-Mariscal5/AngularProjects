import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  datoHijo: string = '';
  @Input() DatPlaceholder!:string ;
  // @Output() enterPresionado = new EventEmitter<string>();
  // //HostListener - sirve para esuchar eventos del dom 
  // @HostListener('document:keydown.enter', ['$event'])
  // handleEnter(event: KeyboardEvent) {
  //   console.log("Hijo search Input emitiendo");
  //   this.enterPresionado.emit(this.datoHijo);
  // }
  @Output()
  onValue : EventEmitter<string> = new EventEmitter<string>();

  emitValue(value:string):void{
    console.log("Emitiendo desde hijo ");
      this.onValue.emit( value );
  }

}
