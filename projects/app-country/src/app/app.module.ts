import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
//modulos
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './modules/core/core.module';
//Rutas principales
import { AppRoutingModule } from './app-routing.module';
//angular material
import { MaterialModule } from './modules/material/material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
