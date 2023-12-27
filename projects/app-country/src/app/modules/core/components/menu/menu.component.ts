import { Component } from '@angular/core';

interface MenuItem {
  icon: string;
  title: string;
  path: string;
}

@Component({
  selector: 'appC-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { icon: 'location_city', title: 'Capital', path: '' },
    { icon: 'flag', title: 'País', path: '' },
    { icon: 'south_america', title: 'Region', path: '' },
    { icon: 'quiz', title: 'Test', path: '' },
  ];
}
