import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

//angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

//modulos
import { SharedModule } from './shared/shared.module';
import { DemoButonsComponent } from './shared/components/demo-butons/demo-butons.component';
import { CoreModule } from './modules/core/core.module';

import { RegionComponent } from './modules/region/infrestructure/presentation/components/region/region.component';
import { CapitalComponent } from './modules/capital/infrestructure/presentation/components/capital/capital.component';
import { PaisComponent } from './modules/pais/infrestructure/presentation/components/pais/pais.component';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

///
const routes:Routes = [
  //{path:"",component:PageLoginComponent},
  {path:'capital',component:CapitalComponent},
  {path:'region',component:RegionComponent},
  {path:'pais',component:PaisComponent},
  {path:'test',component:DemoButonsComponent},
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
   RouterModule.forRoot(routes),
   SharedModule,
   CoreModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
