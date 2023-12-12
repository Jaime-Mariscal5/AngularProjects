import { Injectable } from "@angular/core";
import { Girfs } from "../domain/gifs";
import { Observable, Subject } from "rxjs";


@Injectable()
export class showTag{

    private gifsSubject = new Subject<Girfs[]>();

    sendGifs(gifs:Girfs[]){
        this.gifsSubject.next(gifs);
    }

    getGifs(): Observable<Girfs[]>{
        return this.gifsSubject.asObservable();
    }
}