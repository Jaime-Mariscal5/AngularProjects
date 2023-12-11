
import {Request , Response} from 'express'
import { SearchTag } from '../../application/search-Tag.app';

export class GifsController {

    //obtener por inyeccion de dependnencia lo que se creo en aplicacion
    constructor(private readonly  ST:SearchTag){}

    async run(req:Request , res:Response){
        //const msn = req.params.ST
        const msn =  req;
        console.log(req, msn);
        console.log(req.params);
        console.log("Aun no entiendo ");
        await this.ST.execute("Test");
    }
}