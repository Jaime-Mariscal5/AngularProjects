import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'projects/app-country/src/app/shared/shared.module';
import { PaisComponent } from './presentation/components/pais/pais.component';
import { MaterialModule } from '../../material/material.module';
import { PaisRoutingModule } from './pais-routing.module';

//clases 
import { searchCountry } from '../application/search-country.app';
import { paisInfrestructure } from './pais.infrestructure';
import { HttpClientModule } from '@angular/common/http';
import { showCountry } from '../application/show-country.app';


const PropAplication = [ searchCountry , showCountry ]; //agregfar clase application
const PropInfrastructure = [paisInfrestructure];

@NgModule({
  declarations: [PaisComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    PaisRoutingModule,
    HttpClientModule
  ],
  providers:[ ... PropAplication , PropInfrastructure]
})
export class PaisModule { }
