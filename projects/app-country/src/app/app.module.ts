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
import { PageLoginComponent } from './modules/core/pages/page-login/page-login.component';
import { CoreModule } from './modules/core/core.module';




///
const routes:Routes = [
  //{path:"",component:PageLoginComponent},
  {path:'',component:DemoButonsComponent},
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
   RouterModule.forRoot(routes),
   SharedModule,
   CoreModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
