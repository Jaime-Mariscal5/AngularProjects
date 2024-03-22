import { Inject, Injectable } from "@angular/core";
import { Auth } from "../domain/auth";
import { AuthPort } from "../domain/ports/auth.port";
import { AuthAdapter } from "../infrestructure/auth.adapter";
import { Router } from "@angular/router";


@Injectable()
export class AuthApplication{

    //necesario Injectar valores concretos no se puede inyectar interfaces
    constructor(
        @Inject(AuthAdapter) private readonly adapter: AuthPort,
        private readonly router:Router
        ){}

    login(auth:Auth){

        //test
        this.adapter.login(auth).subscribe({next: (data) => {
            //redirigir a capital
            this.router.navigate(['capital']);
        }});
        
    }

}