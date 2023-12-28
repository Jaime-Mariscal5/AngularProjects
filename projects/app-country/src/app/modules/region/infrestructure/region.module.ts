import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'projects/app-country/src/app/shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { RegionComponent } from './presentation/components/region/region.component';
import { RegionRoutingModule } from './region.routing.module';
//import { CapitalRoutingModule } from './capital.routing.module';// rutas hijas

@NgModule({
  declarations: [RegionComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RegionRoutingModule
  ]
})
export class RegionModule { }
