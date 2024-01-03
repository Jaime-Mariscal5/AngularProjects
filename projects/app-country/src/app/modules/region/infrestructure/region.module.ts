import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'projects/app-country/src/app/shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { RegionComponent } from './presentation/components/region/region.component';
import { RegionRoutingModule } from './region.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { searchRegion } from '../application/search-region.app';
import { regionInfrestructure } from './region.infrestructure';
import { showRegion } from '../application/show-region.app';
//import { CapitalRoutingModule } from './capital.routing.module';// rutas hijas


const PropAplication = [ searchRegion , showRegion ]; //agregfar clase application
const PropInfrastructure = [ regionInfrestructure ];

@NgModule({
  declarations: [RegionComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RegionRoutingModule,
    HttpClientModule
  ],
  providers:[ ... PropAplication , PropInfrastructure]
})
export class RegionModule { }
