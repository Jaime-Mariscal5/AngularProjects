import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'shared-select-regions',
  templateUrl: './select-regions.component.html',
  styleUrls: ['./select-regions.component.scss']
})
export class SelectRegionsComponent {

  Regions:string[] = ['Africa','Americas','Asia','Europe','Oceania'];
  @Output() onDebounce = new EventEmitter<string>();

  onRegionChange(event: any): void {
    // Emite el valor seleccionado al componente padre
    this.onDebounce.emit(event.value);
  }

  
}
