import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component4es
import { DemoButonsComponent } from './shared/components/demo-butons/demo-butons.component';
import { PageLoginComponent } from './modules/core/pages/page-login/page-login.component';
import { CountryPageComponent } from './modules/core/pages/country-page/country-page.component';

import { CapitalComponent } from './modules/core/components/capital/capital.component';
import { RegionComponent } from './modules/core/components/region/region.component';
import { PaisComponent } from './modules/core/components/pais/pais.component';

///Rutas principales
/**
 * Manera recomendada de usar las rutas
 */
const routes: Routes = [
  { path: 'login', component: PageLoginComponent },
  {
    path: 'capital',  component: CapitalComponent 
    // loadChildren: () =>
    //   import('./modules/capital/infrestructure/capital.module').then(
    //     (m) => m.CapitalModule
    //   ),
  },
  { path: 'region', component: RegionComponent},
  { path: 'pais', component: PaisComponent},
  { path: 'country/by/:id', component: CountryPageComponent },
  { path: 'test', component: DemoButonsComponent },
  { path: '**', redirectTo: 'login' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
