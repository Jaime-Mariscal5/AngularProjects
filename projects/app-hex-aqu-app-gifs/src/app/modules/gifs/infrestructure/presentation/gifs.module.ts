import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';

//services - Aplication
import { SearchTag } from '../../application/search-Tag.app';
import { TagHistory } from '../../application/TagHistory.app';


//app\modules\gifs\infrestructure\presentation\gifs.module.ts

//clases de capas
const PropAplication = [ SearchTag ]; //agregfar clase application
const PropInfrastructure = [];

@NgModule({
  declarations:[
    HomePageComponent, 
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [CommonModule],
  exports:[HomePageComponent],
 providers:[ ... PropAplication]//agregar 
})
export class GifsModule { }
