import { ModuleWithProviders, NgModule } from '@angular/core';
import { Ilayout } from './layout.interface';
import { Layout_Token } from './layout.token';
import { layoutService } from './layout.service';

@NgModule()
export class LayoutModule {
  // nombre es muy opcional
  //se agrega que sea estatico para no tener que instanciar
  //retorna a si mismo 
  static forRoot(config: Ilayout): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [{ provide: Layout_Token, useValue: config }, layoutService],
    };
  }
}
