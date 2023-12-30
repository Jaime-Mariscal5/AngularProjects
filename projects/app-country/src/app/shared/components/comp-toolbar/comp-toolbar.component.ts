import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'appC-comp-toolbar',
  templateUrl: './comp-toolbar.component.html',
  styleUrls: ['./comp-toolbar.component.scss'],
})
export class CompToolbarComponent {
  constructor( @Inject(DOCUMENT) private document: Document, private render: Renderer2) {}

  onSlideToggleChange(event: any) {
    if (event.checked) {
      this.render.removeClass(this.document.body, 'light-theme');
      this.render.addClass(this.document.body, 'dark-theme');
    } else {
      this.render.removeClass(this.document.body, 'dark-theme');
      this.render.addClass(this.document.body, 'light-theme');
    }
  }
}
