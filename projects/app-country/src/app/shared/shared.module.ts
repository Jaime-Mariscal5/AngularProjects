import { NgModule, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompToolbarComponent } from './components/comp-toolbar/comp-toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatIconRegistry } from '@angular/material/icon';//icono 
import { DemoButonsComponent } from './components/demo-butons/demo-butons.component';
import { TitleComponent } from './components/title/title.component';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MaterialModule } from '../modules/material/material.module';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    CompToolbarComponent,
    SidenavComponent,
    DemoButonsComponent,
    TitleComponent,
    SearchBoxComponent,
    TableComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,    
  ],
  exports:[
    CompToolbarComponent,
    SidenavComponent,
    DemoButonsComponent,
    SearchBoxComponent,
    TitleComponent,
    TableComponent
  ]
})
export class SharedModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon('your-custom-icon', 'assets/icons/nights_stay_black_24dp.svg');
  }
 }
