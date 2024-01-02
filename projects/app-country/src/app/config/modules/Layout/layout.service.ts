import { Injectable, Inject } from '@angular/core';
import { Ilayout } from './layout.interface';
import { Layout_Token } from './layout.token';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class layoutService {
  showMenu: boolean;
  showHeader: boolean;
  private readonly configRx: BehaviorSubject<Ilayout>;
  /**
   * En este servicio se setean los valores de showMenu y showHeader
   * 1.Injectar el token creado
   */
  constructor(@Inject(Layout_Token) private Layout: Ilayout) {
    console.log('LayoutService constructor');
    console.log('LayoutService layout: ', Layout);
    this.showMenu = Layout.showMenu;
    this.showHeader = Layout.showHeader;
    this.configRx = new BehaviorSubject<Ilayout>(Layout); // es igual a una instancia de BehaviorSubject y mandamos Layout
  }

  //metodo
  set configuration(config: Ilayout) {
    this.configRx.next(config); // le decimos que se comporte como un observador
  }

  get configuration(): Observable<Ilayout> {
    return this.configRx.asObservable() // solo devuelve el observer
  }
}
