import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { layoutService } from 'projects/app-country/src/app/config/modules/Layout/layout.service';
import { searchCountry } from '../../../country/application/search-country.app';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'appC-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit{

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly layoutS:layoutService,
    private fCountry:searchCountry,
    ){
      layoutS.configuration = { showMenu: true, showHeader: true };
    }
  ngOnInit(): void {
    //usar el servicio
    /**
     * Usar el servuicio 
     * this.activatedRoute.params es un observable 
     */
    this.activatedRoute.params  //NOTA :  params es un observable 
    // .pipe(
    //   tap(console.log) //tap sirve para disparar efectos secundarios
    //   switchMap() //recibe elk valor anterior y envia un observador
    //   ) 
      
    .subscribe(({id}) => {
      console.log(id);
      this.fCountry.execute(id,'ByAlphaCode');
    })
  }

}
