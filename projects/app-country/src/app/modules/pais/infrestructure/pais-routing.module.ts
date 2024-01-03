import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './presentation/components/pais/pais.component';
//component4es 

///Rutas principales
/**
 * Manera recomendada de usar las rutas
 */
const routes:Routes = [
   {path:'by-country',component:PaisComponent },
  {path:'**',redirectTo:'by-country'},
];
@NgModule({
  imports: [
   RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class PaisRoutingModule { }
