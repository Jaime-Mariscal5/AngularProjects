import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'projects/app-country/src/app/shared/shared.module';
import { CapitalComponent } from './presentation/components/capital/capital.component';
import { MaterialModule } from '../../material/material.module';
import { CapitalRoutingModule } from './capital.routing.module';// rutas hijas

@NgModule({
  declarations: [CapitalComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    CapitalRoutingModule
  ]
})
export class CapitalModule { }
