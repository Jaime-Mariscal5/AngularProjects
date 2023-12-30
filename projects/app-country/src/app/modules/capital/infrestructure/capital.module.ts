import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'projects/app-country/src/app/shared/shared.module';
import { CapitalComponent } from './presentation/components/capital/capital.component';
import { MaterialModule } from '../../material/material.module';
import { CapitalRoutingModule } from './capital.routing.module';// rutas hijas
import { SearchCap } from '../application/search-Cap.app';
import { capitalInfrestructure } from './capital.infrastructure';
import { HttpClientModule } from '@angular/common/http';


//clases de capas
const PropAplication = [ SearchCap ]; //agregfar clase application
const PropInfrastructure = [capitalInfrestructure];
@NgModule({
  declarations: [CapitalComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    CapitalRoutingModule,
    HttpClientModule
  ],
  providers:[ ... PropAplication , PropInfrastructure]//agregar dep
})
export class CapitalModule { }
