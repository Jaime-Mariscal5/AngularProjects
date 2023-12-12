import { Component, Input, OnInit } from '@angular/core';
import { Girfs } from '../../../../domain/gifs';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent{


  @Input()
  public gifs:Girfs[] = [];
  


}
