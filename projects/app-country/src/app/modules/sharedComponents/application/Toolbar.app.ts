// import { DOCUMENT } from '@angular/common';
// import {  Inject, Injectable, Renderer2 } from '@angular/core';
import {  Injectable } from '@angular/core';


//capa Aplicacion
//C:\Users\Jaime\Documents\AngularProjects\projects\app-country\src\app\modules\sharedComponents\application\Toolbar.app.ts
@Injectable()
export class ToolbarApp { 

   // constructor(@Inject(DOCUMENT) private document:Document,private render:Renderer2){}

    ChangeTheme(event: any) {
        console.log('Slide toggle cambió:', event.checked);
      }

}