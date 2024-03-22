import { Observable } from "rxjs";
import { Auth } from "../domain/auth";
import { AuthPort } from "../domain/ports/auth.port";
import { HttpClient } from "@angular/common/http";
import { AuthToken } from "../domain/auth-token";
import { TokensData } from "../domain/dtos/auth-tokens.dto";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthAdapter implements AuthPort{

    constructor(private readonly http:HttpClient){}
    
    login(auth: Auth): Observable<AuthToken> {
       return this.http.post<TokensData>('http://127.0.0.1:8000/api/login',auth.properties());
    }
    getNewAccessToken(refreshToken: string): Observable<AuthToken> {
        throw new Error("Method not implemented.");
    }
    
    
}