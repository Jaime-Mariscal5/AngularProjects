import { Component, EventEmitter,  Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Input() DatPlaceholder!:string ;
  @Output() public onValue = new EventEmitter<string>();

  emitValue(value:string){
    this.onValue.emit(value);
    console.log('Emitiendo desde hijo:', value);
  }

}
