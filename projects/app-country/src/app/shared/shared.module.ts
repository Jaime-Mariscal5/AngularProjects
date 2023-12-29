import { NgModule, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompToolbarComponent } from './components/comp-toolbar/comp-toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarApp } from '../modules/sharedComponents/application/Toolbar.app';
import { MatIconRegistry } from '@angular/material/icon';//icono 
import { DemoButonsComponent } from './components/demo-butons/demo-butons.component';
import { TitleComponent } from './components/title/title.component';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MaterialModule } from '../modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const PropAplication = [ToolbarApp ]; //agregfar clase application
const PropInfrastructure = [];

@NgModule({
  declarations: [
    CompToolbarComponent,
    SidenavComponent,
    DemoButonsComponent,
    TitleComponent,
    SearchBoxComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,    
    // FormsModule, // Asegúrate de que FormsModule está importado
    // MatInputModule,
    // MatFormFieldModule,
  ],
  exports:[
    CompToolbarComponent,
    SidenavComponent,
    DemoButonsComponent,
    SearchBoxComponent,
    TitleComponent
  ],
  providers: [...PropAplication],
})
export class SharedModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    // Registrar tus íconos personalizados C:\Users\Jaime\Documents\AngularProjects\projects\app-country\src\assets\icons\nights_stay_black_24dp.svg
    this.matIconRegistry.addSvgIcon('your-custom-icon', 'assets/icons/nights_stay_black_24dp.svg');
  }
 }
