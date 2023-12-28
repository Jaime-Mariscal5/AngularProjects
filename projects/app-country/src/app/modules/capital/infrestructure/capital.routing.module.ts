import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalComponent } from './presentation/components/capital/capital.component';

//component4es 

///Rutas principales
/**
 * Manera recomendada de usar las rutas
 */
const routes:Routes = [
   {path:'by-capital',component:CapitalComponent},
  {path:'**',redirectTo:'by-capital'},
];
@NgModule({
  imports: [
   RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class CapitalRoutingModule { }
