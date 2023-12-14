import { Component, Input, OnInit } from '@angular/core';
import { Girfs } from '../../../../domain/gifs';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css']
})
export class GifCardComponent implements OnInit{
  
  @Input() gif!:Girfs;
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    if(!this.gif) throw new Error('Method not implemented.');
  }
  // constructor(gif: Girfs) {
  //   this.gif = gif;
  //   console.log(this.gif)
  // }

}
