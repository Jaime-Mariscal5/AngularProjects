import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchTag } from '../../../../application/search-Tag';

/**
 * (Keyup) - es un enlace de evento Angular para responder a cualquier evento DOM. 
 * Es un evento sincrónico que se activa cuando el usuario interactúa con los controles de entrada basados ​​en texto. 
 */

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text" class="form-control" placeholder="Ingresa tu búsqueda"
  (keyup.enter)="onSearchInput()" 
      #txtTagInput>
`
})
export class SearchBoxComponent {
  /**
   *  @ViewChild() - Enlaza el resultado
   * final de la vista del componente basado en el
   * predicado a la propiedad de la clase
   * 
   */

  @ViewChild('txtTagInput') //recibe 1  a 2 argumentos -> ViewChild(selector: string | Function | ProviderToken<unknown>)
  private tagInput!: ElementRef<HTMLInputElement> //puede ser nulo agregar un ! para decir que simepre tendra un valor

   constructor(private searchService: SearchTag) {}

  // //funcion del componente recibe tipo string 
  onSearchInput(){  //ya  con tagInput y viewchild ya no es necesario usar (tag: string): void 
   //this.searchService.execute()
    this.searchService.execute(this.tagInput.nativeElement.value);//se puede acceder a las propiedades atravez de la propiedad
  }



}
