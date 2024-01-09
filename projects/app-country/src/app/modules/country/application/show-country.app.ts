import { Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Country } from "../domain/interface/country.interface";

@Injectable()
export class showCountry{

    //
    private countrySubject = new Subject<Country[] >();//está tipado para emitir datos de tipo InterCapital[].
    /**
     * utiliza el método next del Subject para enviar (emitir) esos datos al flujo del Subject.
     * Esto notificará a todos los observadores que están suscritos al Subject sobre 
     * la llegada de nuevos datos
     */
    sendCountries(countries:Country[] ){ console.log(countries);  this.countrySubject.next(countries); }

    /**
     * 
     * devuelve una representación Observable del Subject utilizando asObservable().
     * Esto se hace para que los consumidores de este servicio solo puedan observar el flujo de datos (escuchar actualizaciones), 
     * pero no emitir nuevos datos directamente. Los componentes que se suscriban a este Observable recibirán actualizaciones 
     * cada vez que se llame a next en el Subject.
     */
    // regresa observable
    getCountry(): Observable<Country[]>{return this.countrySubject.asObservable();}
    

}