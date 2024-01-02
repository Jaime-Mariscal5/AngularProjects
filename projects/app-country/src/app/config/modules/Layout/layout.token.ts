import { InjectionToken } from "@angular/core";
import { Ilayout } from "./layout.interface";


//crear un token con identificador 
export const Layout_Token = new InjectionToken<Ilayout>('config');