import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'shared-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {


   
  //opciones par aindicar done etsa el archivo de animaciones projects\app-country\src\assets\lotties\NotFoundAnimation.json
  options:AnimationOptions = {
    path:'../../../../../assets/lotties/NotFoundAnimation.json'
  }

  //Partial nos dice que 1 o mas campos pueden ser opcionales
  styles: Partial<CSSStyleDeclaration> = {
    maxWidth:"80%",
    maxHeight:"100%",
    display:"block",
    margin:"auto"
  }

}
