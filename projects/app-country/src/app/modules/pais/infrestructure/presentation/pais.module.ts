import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'projects/app-country/src/app/shared/shared.module';
import { PaisComponent } from './components/pais/pais.component';

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [PaisComponent],
  imports: [
    CommonModule,SharedModule,
    MatCardModule
  ]
})
export class PaisModule { }
