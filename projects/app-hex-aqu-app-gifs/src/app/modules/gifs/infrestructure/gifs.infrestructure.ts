/**
 * dentro de la capa de infresturctura se tendra el acoplamento de lo de http
 */
import { SearchTag } from "../application/search-Tag";
import { GifsController } from "./controllers/gifs-controller";

/**dependencias que se estaran usando */
export const ST = new SearchTag();
export const gifsController =  new GifsController(ST);//http