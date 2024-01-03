import { CapitalInfo, Car, CoatOfArms, Currencies, Demonyms, Flags, Gini, Idd, InterPais, Languages, Maps, Name, PostalCode, Translation } from "./interfaces/pais.interface";


export type PaisProps = InterPais;
export class Pais {
    private name!:         Name;
    private tld!:          string[];
    private cca2!:         string;
    private ccn3!:         string;
    private cca3!:         string;
    private cioc!:         string;
    private independent!:  boolean;
    private status!:       string;
    private unMember!:     boolean;
    private currencies!:   Currencies;
    private idd!:          Idd;
    private capital!:      string[];
    private altSpellings!: string[];
    private region!:       string;
    private subregion!:    string;
    private languages!:    Languages;
    private translations!: { [key: string]: Translation };
    private latlng!:       number[];
    private landlocked!:   boolean;
    private borders!:      string[];
    private area!:         number;
    private demonyms!:     Demonyms;
    private flag!:         string;
    private maps!:         Maps;
    private population!:   number;
    private gini!:         Gini;
    private fifa!:         string;
    private car!:          Car;
    private timezones!:    string[];
    private continents!:   string[];
    private flags!:        Flags;
    private coatOfArms!:   CoatOfArms;
    private startOfWeek!:  string;
    private capitalInfo!:  CapitalInfo;
    private postalCode!:   PostalCode;

    constructor(Prop:PaisProps){
        Object.assign(this, Prop);
    }
    Properties(): PaisProps {
        return Object.assign({}, this) as unknown as PaisProps;
      }

}