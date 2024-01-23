import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';


//table
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
// Importa otros componentes de Angular Material que desees utilizar

const materialModules = [
  MatSidenavModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatMenuModule,
  MatPaginatorModule,
  MatTableModule,
  MatListModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatChipsModule,
  CdkDropList, CdkDrag,
  MatSelectModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class MaterialModule {}
