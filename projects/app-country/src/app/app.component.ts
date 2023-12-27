import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'appC-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'appCountry';
  showMenu: boolean = true;
  showHeader: boolean = true;
  isHandset: boolean = false;


  //
 constructor(
  @Inject(DOCUMENT) private document:Document,
  private render:Renderer2,
  private breakpointObserver: BreakpointObserver){}
  ngOnInit(): void {
   this.render.addClass(this.document.body, 'dark-theme');
   this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        console.log(result);
        this.isHandset = result.matches;
      });
  }

  toggleDrawer() {
    this.isHandset = !this.isHandset;
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
