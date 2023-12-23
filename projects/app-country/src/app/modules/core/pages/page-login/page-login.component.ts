import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'appC-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent {

  //opciones par aindicar done etsa el archivo de animaciones
  options:AnimationOptions = {
    path:'../../../../../assets/lotties/countries-animation.json'
  }

  //Partial nos dice que 1 o mas campos pueden ser opcionales
  styles: Partial<CSSStyleDeclaration> = {
    maxWidth:"72%",
    maxHeight:"100%",
  }
}
