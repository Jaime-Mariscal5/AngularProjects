

/**
 * dtos sirven para juntar o cambiar una estructura a otra ,
 *  o juntar diferente informaicon 
 * trabja con la data que recibe 
 * {
  "status": true,
  "message": "User logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsIn..."
}
 */

import { AuthToken } from "../auth-token";

export interface TokensData{
    status:boolean
    message:string
    token:string
}


export class AuthTokenDto{
    //un Dto hace que se vuelva menos dependiente de los cambios 
    //informacion que viene de la base de datos 
    static formDataToDomain(data: TokensData): AuthToken {
        const authToken = new AuthToken();
        authToken.status = data.status;
        authToken.message = data.message;
        authToken.token = data.token;
        
        return authToken; // Agrega esta línea para devolver el objeto AuthToken
    }
}
