import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
  
  @Input() url!:string;
  @Input() alt!:string;
  public hasLoad: boolean = false;

  ngOnInit(): void {
   if(!this.url) throw new Error('Method not implemented.');
  }

  onLoad(){
    console.log('Imagen loaded');
    setTimeout(() => {
      
      this.hasLoad = true;
    }, 900);
  }

}
