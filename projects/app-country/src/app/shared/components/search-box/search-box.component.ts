import { Component, EventEmitter,  Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit , OnDestroy {

  private debouncer = new Subject<string>();
  private debouncerSus?: Subscription; // crear un objeto de tipo  Subscription
  //un subject es un tipo especial de  Observable , donde podemos crear un observable manualmente 
  @Input() DatPlaceholder!:string ;
  @Output() public onValue = new EventEmitter<string>();
  @Output() public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
 this.debouncerSus = this.debouncer   //decirle que nuestra variable tipo Subscription sea igual a la Subscription de deboucer
    .pipe(
      debounceTime(500) //pide 2 obj , 1 cuanto tiempo esperar ()obligatorio  ,  2 cuando quieren  ue se ejecuten opcional
    )
    .subscribe( val => {
      console.log('debouncer val ',val);
      this.onDebounce.emit(val);
    })
    
  }

  emitValue(value:string){
    this.onValue.emit(value);
  }

  //divice
  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm);
    console.log(searchTerm);
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("Destroy");
    //destruir la suscripcion cada vez que se elimine el componente 
    this.debouncerSus?.unsubscribe();
  //  this.debouncer.unsubscribe
  }

}
