import { Observable, Subject } from "rxjs";
import { Capital } from "../domain/capital";
import { InterCapital } from "../domain/interfaces/capital.interface";


export class showCapital{

    /**
     *  Aquí se crea un nuevo Subject de RxJS. Un Subject es un tipo de Observable 
     * que permite la emisión de datos a múltiples observadores
     */
    private capitalSubject = new Subject<InterCapital[]>();//está tipado para emitir datos de tipo InterCapital[].

    sendCapitals(capitals:InterCapital[]){
        /**
         * utiliza el método next del Subject para enviar (emitir) esos datos al flujo del Subject.
         * Esto notificará a todos los observadores que están suscritos al Subject sobre 
         * la llegada de nuevos datos
         */
        this.capitalSubject.next(capitals);
    }

    /**
     * 
     * devuelve una representación Observable del Subject utilizando asObservable().
     * Esto se hace para que los consumidores de este servicio solo puedan observar el flujo de datos (escuchar actualizaciones), 
     * pero no emitir nuevos datos directamente. Los componentes que se suscriban a este Observable recibirán actualizaciones 
     * cada vez que se llame a next en el Subject.
     */
    getCapital(): Observable<InterCapital[]>{
        return this.capitalSubject.asObservable();// regresa observable
    }
}