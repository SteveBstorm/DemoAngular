import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from '../../models/pokemondetails.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemomdetails2',
  templateUrl: './pokemomdetails2.component.html',
  styleUrls: ['./pokemomdetails2.component.scss']
})
export class Pokemomdetails2Component implements OnInit {


  model: PokemonDetails;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.model= this.router.snapshot.data['poke'];
  }

}
