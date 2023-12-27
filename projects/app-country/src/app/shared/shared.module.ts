import { NgModule, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompToolbarComponent } from './components/comp-toolbar/comp-toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToolbarApp } from '../modules/sharedComponents/application/Toolbar.app';
import { MatButtonModule } from '@angular/material/button';
import { MatIconRegistry } from '@angular/material/icon';
import { DemoButonsComponent } from './components/demo-butons/demo-butons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { TitleComponent } from './components/title/title.component';

import { SearchBoxComponent } from './components/search-box/search-box.component';

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
    BrowserAnimationsModule,
    MatSidenavModule,
    CommonModule,    
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
   // TitleComponent
  ],
  exports:[
    CompToolbarComponent,
    SidenavComponent,
    DemoButonsComponent,
    SearchBoxComponent
  ],
  providers: [...PropAplication],
})
export class SharedModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    // Registrar tus íconos personalizados C:\Users\Jaime\Documents\AngularProjects\projects\app-country\src\assets\icons\nights_stay_black_24dp.svg
    this.matIconRegistry.addSvgIcon('your-custom-icon', 'assets/icons/nights_stay_black_24dp.svg');
  }
 }
