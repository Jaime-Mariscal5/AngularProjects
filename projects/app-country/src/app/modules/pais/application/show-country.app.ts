import { Observable, Subject } from "rxjs";
import { InterPais } from "../domain/interfaces/pais.interface";
import { Injectable } from "@angular/core";

@Injectable()
export class showCountry{

    private paisSubject = new Subject<InterPais[]>();//está tipado para emitir datos de tipo InterCapital[].

    sendCountries(paises:InterPais[]){
        /**
         * utiliza el método next del Subject para enviar (emitir) esos datos al flujo del Subject.
         * Esto notificará a todos los observadores que están suscritos al Subject sobre 
         * la llegada de nuevos datos
         */
        this.paisSubject.next(paises);
    }

    /**
     * 
     * devuelve una representación Observable del Subject utilizando asObservable().
     * Esto se hace para que los consumidores de este servicio solo puedan observar el flujo de datos (escuchar actualizaciones), 
     * pero no emitir nuevos datos directamente. Los componentes que se suscriban a este Observable recibirán actualizaciones 
     * cada vez que se llame a next en el Subject.
     */
    getCountry(): Observable<InterPais[]>{
        return this.paisSubject.asObservable();// regresa observable
    }
}