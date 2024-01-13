import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { layoutService } from 'projects/app-country/src/app/config/modules/Layout/layout.service';
import { searchCountry } from '../../../country/application/search-country.app';
import { switchMap, tap } from 'rxjs';
import { Country, Translation } from '../../../country/domain/interface/country.interface';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'appC-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss'],
})
export class CountryPageComponent implements OnInit {

  public Country: Country | null = null;
  loading:boolean = false;
  public translations:  { [key: string]: Translation }  = {};

  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 4, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];


  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly layoutS: layoutService,
    private fCountry: searchCountry,
    private router: Router
  ) {
    layoutS.configuration = { showMenu: true, showHeader: true };
  }
  ngOnInit(): void {
    //usar el servicio
    /**
     * Usar el servuicio
     * this.activatedRoute.params es un observable
     */
    this.activatedRoute.params //NOTA :  params es un observable
      .pipe(
       // tap(console.log), //tap sirve para disparar efectos secundarios
        switchMap(({ id }) => this.fCountry.SearchByAlphaCode(id)) //recibe elk valor anterior y envia un observador
      )

      .subscribe((country) => {
        //Si regresa un null
        if (!country) this.router.navigateByUrl('');
        console.log(country);
        console.log(country?.translations);
        this.translations = country?.translations || {};
        console.log(this.translations);
        return (this.Country = country);

      });
  }

  // drop(event: CdkDragDrop<Translation>) {
  //   moveItemInArray(this.translations, event.previousIndex, event.currentIndex);
  // }
  // drop(event: CdkDragDrop<string[]>) {
  //   const translationKeys = Object.keys(this.translations);
  //   const movedTranslationKey = translationKeys[event.previousIndex];
  
  //   // Crear una copia del objeto de traducciones original
  //   const updatedTranslations = { ...this.translations };
  
  //   // Eliminar la traducción en la posición anterior
  //   const [removedTranslation] = translationKeys.splice(event.previousIndex, 1);
  //   // Insertar la traducción en la nueva posición
  //   translationKeys.splice(event.currentIndex, 0, removedTranslation);
  
  //   // Reconstruir el objeto de traducciones con el nuevo orden
  //   translationKeys.forEach((key) => {
  //     updatedTranslations[key] = this.translations[key];
  //   });
  
  //   // Asignar el nuevo objeto de traducciones
  //   this.translations = updatedTranslations;
  // }
}
