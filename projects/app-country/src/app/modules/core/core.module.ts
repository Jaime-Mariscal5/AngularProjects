import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginComponent } from './components/login/login.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//directives
import { CapsLockDirective } from './directives/capsLock.directive';
import { MenuComponent } from './components/menu/menu.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { searchCountry } from '../country/application/search-country.app';
import { showCountry } from '../country/application/show-country.app';
import { countryInfrestructure } from '../country/infrestructure/country.infrestructure';
import { RegionComponent } from './components/region/region.component';
import { PaisComponent } from './components/pais/pais.component';
import { CapitalComponent } from './components/capital/capital.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

export function playerFactory(){
  return import('lottie-web');
}



const PropAplication = [ searchCountry , showCountry ]; //agregfar clase application
const PropInfrastructure = [ countryInfrestructure ];
@NgModule({
  declarations: [
     PageLoginComponent,
     LoginComponent ,
     CapsLockDirective, 
     MenuComponent,
     CountryPageComponent,
     RegionComponent,
     PaisComponent,
     CapitalComponent
    ],
  imports: [
    CommonModule,
    LottieModule.forRoot({player:playerFactory}),// animation
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule
   // PaisModule
  ],
  exports:[MenuComponent],
  providers:[ ... PropAplication , PropInfrastructure]
})
export class CoreModule { }
