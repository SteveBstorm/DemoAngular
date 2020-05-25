import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokedex } from '../models/pokedex.model';
import { PokemonDetails } from '../models/pokemondetails.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _client: HttpClient) { }

  getAll(url: string): Observable<Pokedex> {
    return this._client.get<Pokedex>(url);
  }

  getOne(url: string): Observable<PokemonDetails>
  {
    return this._client.get<PokemonDetails>(url);
  }
}
