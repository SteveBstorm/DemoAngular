import { Injectable } from '@angular/core';
import { Pokedex } from '../models/pokedex.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { HttpClient } from '@angular/common/http';
import { NbToastrService } from '@nebular/theme';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokedexresolverService implements Resolve<Pokedex> {

  constructor(private _client: HttpClient,
              private toast: NbToastrService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Pokedex | Observable<Pokedex> | Promise<Pokedex> {
    return this._client.get<Pokedex>("https://pokeapi.co/api/v2/pokemon")
    .pipe(catchError(e => {
      this.toast.danger("Problème de chargement");
      return of(e);
    }))
  }
}
