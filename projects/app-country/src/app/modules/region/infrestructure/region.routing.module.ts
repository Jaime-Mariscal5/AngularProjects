import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './presentation/components/region/region.component';

//component4es 

///Rutas principales
/**
 * Manera recomendada de usar las rutas
 */
const routes:Routes = [
   {path:'by-region',component:RegionComponent},
  {path:'**',redirectTo:'by-region'},
];
@NgModule({
  imports: [
   RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class RegionRoutingModule { }
