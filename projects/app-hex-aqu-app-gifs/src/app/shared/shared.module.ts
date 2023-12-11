import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [SidebarComponent , NavbarComponent],
  imports: [
    CommonModule
  ],
  //importar porque seran necesario para usarlos en otros lugares
  exports:[SidebarComponent , NavbarComponent]
})
export class SharedModule { }
