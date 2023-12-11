import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TagHistory } from '../modules/gifs/application/TagHistory.app';


const PropAplication = [ TagHistory ]; //agregfar clase application
const PropInfrastructure = [];


@NgModule({
  declarations: [SidebarComponent , NavbarComponent],
  imports: [
    CommonModule
  ],
  //importar porque seran necesario para usarlos en otros lugares
  exports:[SidebarComponent , NavbarComponent],
  //pro
  providers:[ ...PropAplication]
})
export class SharedModule { }
