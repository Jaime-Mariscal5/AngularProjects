import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { DOCUMENT } from '@angular/common';
import { layoutService } from './config/modules/Layout/layout.service';
import { Ilayout } from './config/modules/Layout/layout.interface';

@Component({
  selector: 'appC-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'appCountry';
  //agregar valores por defecto 
  showMenu: boolean = false;
  showHeader: boolean = false;
  isHandset: boolean = false;


  //
 constructor(
  @Inject(DOCUMENT) private document:Document,
  private render:Renderer2,
  private breakpointObserver: BreakpointObserver,
  private readonly layoutS:layoutService){
    // this.showMenu = layoutS.showMenu;
    // this.showHeader = layoutS.showHeader;
    this.layoutS.configuration.subscribe((layout: Ilayout) => {
      this.showMenu = layout.showMenu;
      this.showHeader = layout.showHeader;
    });
  }
  ngOnInit(): void {
   this.render.addClass(this.document.body, 'dark-theme');
   this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isHandset = result.matches;
      });
  }

  toggleDrawer() {
    this.isHandset = !this.isHandset;
  }
}
