import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component4es 
import { RegionComponent } from './modules/region/infrestructure/presentation/components/region/region.component';
import { CapitalComponent } from './modules/capital/infrestructure/presentation/components/capital/capital.component';
import { PaisComponent } from './modules/pais/infrestructure/presentation/components/pais/pais.component';
import { DemoButonsComponent } from './shared/components/demo-butons/demo-butons.component';

///Rutas principales
/**
 * Manera recomendada de usar las rutas
 */
const routes:Routes = [
  {path:'capital',
  loadChildren: () => import('./modules/capital/infrestructure/capital.module').then(m => m.CapitalModule)
  },
  {path:'region', 
  loadChildren: () => import('./modules/region/infrestructure/region.module').then(m => m.RegionModule)
},
  // lazy load - 
  {path:'pais',
    loadChildren: () => import('./modules/pais/infrestructure/presentation/pais.module').then(m => m.PaisModule)
  },
  {path:'test',component:DemoButonsComponent},
  {path:'**',redirectTo:'test'},
];
@NgModule({
  imports: [
   RouterModule.forRoot(routes),
  ],exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
