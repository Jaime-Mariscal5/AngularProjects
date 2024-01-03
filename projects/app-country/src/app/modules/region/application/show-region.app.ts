import { Observable, Subject } from "rxjs";
import { InterRegion } from "../domain/interfaces/region.interface";
import { Injectable } from "@angular/core";

@Injectable()
export class showRegion {

    private regionSubject = new Subject<InterRegion[]>();

    sendRegions(regions:InterRegion[]){
        this.regionSubject.next(regions);
    }
    getRegion():Observable<InterRegion[]>{
        return this.regionSubject.asObservable();
    }

}