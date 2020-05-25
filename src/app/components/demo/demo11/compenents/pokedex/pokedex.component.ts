import { Component, OnInit } from '@angular/core';
import { Pokedex } from '../../models/pokedex.model';
import { PokemonService } from '../../services/pokemon.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  model: Pokedex;
  temp : string;

  constructor(
    private pknService: PokemonService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadItems('https://pokeapi.co/api/v2/pokemon');
    //this.model = this.route.snapshot.data.tutu;
  }

  loadItems(url: string)
  {
    this.pknService.getAll(url).subscribe(
      data => this.model = data
    )
  }

  clickPrevious(){
    this.loadItems(this.model.previous);

  }
  clickNext(){
    this.loadItems(this.model.next);
  }

  onClick(url: string){
    this.temp = url;
  }
}
