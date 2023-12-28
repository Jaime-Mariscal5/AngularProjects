import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'projects/app-country/src/app/shared/shared.module';
import { PaisComponent } from './components/pais/pais.component';
import { MaterialModule } from '../../../material/material.module';
import { PaisRoutingModule } from './pais-routing.module';

@NgModule({
  declarations: [PaisComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    PaisRoutingModule
  ]
})
export class PaisModule { }
