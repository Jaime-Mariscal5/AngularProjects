import { Component } from '@angular/core';
import { MenuService , MenuItem } from '../../services/menu.service';


@Component({
  selector: 'appC-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  menuItems:MenuItem[] =[];
  constructor(private readonly menuService:MenuService){
    this.menuItems = this.menuService.getOptionMenu();
  }

}
