import { Inject, Injectable } from '@angular/core';
import { showCountry } from './show-country.app';
import { countryInfrestructure } from '../infrestructure/country.infrestructure';
import { countryRepository } from '../domain/repository/country.reposiotry';
import { Country } from '../domain/interface/country.interface';
import { Observable } from 'rxjs';

@Injectable()
export class searchCountry {
  countryRepo: countryRepository;
  constructor(
    @Inject(countryInfrestructure) _countryReposiotry: countryRepository,
    private showCountry: showCountry
  ) {
    this.countryRepo = _countryReposiotry;
  }

  execute(str: string, StrType: string) {
    if (str.length == 0 && StrType.length == 0) return;
    let endpoint: string = '';

    switch (StrType) {
      case 'ByRegion':
        endpoint = 'region';
        break;
      case 'ByName':
        endpoint = 'name';
        break;
      case 'ByCapital':
        endpoint = 'capital';
        break;
      case 'ByAlphaCode':
        endpoint = 'alpha';
        break;
      default:
        return;
    }

    this.countryRepo.getCountry(str, endpoint).subscribe((data) => {
      this.showCountry.sendCountries(data);
    });
  }

  SearchByAlphaCode(code: string): Observable<Country | null> {
    return this.countryRepo.getCountryByAlphaCode(code);
  }
}
