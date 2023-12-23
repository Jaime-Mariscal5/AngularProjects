import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'appC-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'appCountry';
  showMenu: boolean = false;
  showHeader: boolean = false;

  //
 constructor(@Inject(DOCUMENT) private document:Document,private render:Renderer2){}
  ngOnInit(): void {
   this.render.addClass(this.document.body, 'dark-theme')
  }

  // onSlideToggleChange(event: any) {
  //   // Manejar el evento de cambio aquí
  //   console.log('Slide toggle cambió:', event.checked);
  //   if(event.checked) {
  //     this.render.removeClass(this.document.body, 'light-theme')
  //     this.render.addClass(this.document.body, 'dark-theme')
  //   }else{
  //     this.render.removeClass(this.document.body, 'dark-theme')
  //     this.render.addClass(this.document.body, 'light-theme')
  //   }
  // }
}
