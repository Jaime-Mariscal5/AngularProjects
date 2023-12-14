import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';

//services - Aplication
import { SearchTag } from '../../application/search-Tag.app';
import { showTag } from '../../application/show-Tag.app';

//infrestructure
import { GifInfrestructure } from '../gifs.infrestructure';
import { GifCardComponent } from './components/gif-card/gif-card.component';

//Modulos
import { SharedModule } from 'projects/app-hex-aqu-app-gifs/src/app/shared/shared.module';

//app\modules\gifs\infrestructure\presentation\gifs.module.ts

//clases de capas
const PropAplication = [ SearchTag , showTag ]; //agregfar clase application
const PropInfrastructure = [GifInfrestructure];

@NgModule({
  declarations:[
    HomePageComponent, 
    SearchBoxComponent,
    CardListComponent,
    GifCardComponent
  ],
  imports: [CommonModule , SharedModule],
  exports:[HomePageComponent],
 providers:[ ... PropAplication , PropInfrastructure]//agregar 
})
export class GifsModule { }
