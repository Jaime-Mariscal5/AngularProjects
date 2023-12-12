import { Component, OnInit } from '@angular/core';
import { Girfs } from '../../../../domain/gifs';
import { showTag } from '../../../../application/show-Tag.app';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  gifs:Girfs[] = [];

  constructor(private showT:showTag){}
  ngOnInit() {
    
    this.showT.getGifs().subscribe((gifs)=>{
      console.log("Gifs recibidos componente card");
      this.gifs = gifs
    })
  }

}
