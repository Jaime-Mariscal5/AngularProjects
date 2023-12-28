import { Injectable } from '@angular/core';



export interface MenuItem {
  icon: string;
  title: string;
  path: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuItems: MenuItem[] = [
    { icon: 'location_city', title: 'Capital', path: '/capital' },
    { icon: 'flag', title: 'País', path: '/pais' },
    { icon: 'south_america', title: 'Region', path: '/region' },
    { icon: 'quiz', title: 'Test', path: '/test' },
  ];

  constructor() { }

  getOptionMenu():MenuItem[]{
    return [...this.menuItems];
  }
}
