import { Directive, EventEmitter, HostListener, Output } from '@angular/core';


/**
 * la diferencia de una directiva y un componete es 
 * que una directiva no tiene su propio HTML 
 * necesita de un externo 
 * las directivas deben registrarse en un modulo 
 */

@Directive({
  selector: '[appCountry-caps-lock]',// nombre 
})
export class CapsLockDirective {
    //output le digo que es una salida que va emitir un boolean
  @Output() onCapsLock = new EventEmitter<boolean>();// lo que emite es un boolean

  //HostListener - ¿que es un hostListener?
  @HostListener('window:keydown', ['$event'])
  checkCapsLock(event: KeyboardEvent) {
    //emit es una clase de EventEmiter
    this.onCapsLock.emit(

        //devuelve un true si , las mayusc estan precionada y un false cuando no 
      event.getModifierState && event.getModifierState('CapsLock')
    );
  }
}
