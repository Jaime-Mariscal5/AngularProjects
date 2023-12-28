import { Component } from '@angular/core';
import { MenuService } from '../../../modules/core/services/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shared-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  //2injects 
  //para obtener valores de icono y titulo 
  //activateourt  - me devuelve ina instancia de una clase que hace 
  // referencia a la url 
  title!:string;
  constructor(
    private readonly menuService:MenuService,
    private readonly activatedRoute: ActivatedRoute
    ){
     // console.log(this.activatedRoute);
     // console.log(this.activatedRoute.snapshot);
     // console.log(this.activatedRoute.snapshot.pathFromRoot[1]);
      const currentPath = '/' + this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
     // console.log(currentPath);
      const menuItems = this.menuService.getOptionMenu(),
      menuItem = menuItems.find((item)=> item.path == currentPath);
     // console.log(menuItem);
      if(menuItem){
        this.title = menuItem.title;
      }
      
    }

}
