import { Component, OnInit } from '@angular/core';

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
export class MenuComponent implements OnInit{
  menuItems: MenuItem[] = [
    { icon: 'location_city', title: 'Capital', path: '/capital' },
    { icon: 'flag', title: 'País', path: '/pais' },
    { icon: 'south_america', title: 'Region', path: '/region' },
    { icon: 'quiz', title: 'Test', path: '/test' },
  ];
  ngOnInit(): void {
    console.log(this.menuItems);
  }
}
