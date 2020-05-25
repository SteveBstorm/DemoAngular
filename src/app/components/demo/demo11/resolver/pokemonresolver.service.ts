import { Injectable } from '@angular/core';
import { PokemonDetails } from '../models/pokemondetails.model';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonresolverService implements Resolve<PokemonDetails> {

  constructor(private pknService: PokemonService,
              private toast: NbToastrService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<PokemonDetails> {
    return this.pknService.getOne(route.params['url'])
    .pipe(catchError(e => {
      this.toast.danger("Problème de chargement");
      return of(e);
    }));
  }
}
