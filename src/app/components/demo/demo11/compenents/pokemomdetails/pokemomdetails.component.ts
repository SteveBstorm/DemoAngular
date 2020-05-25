import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemomdetails',
  templateUrl: './pokemomdetails.component.html',
  styleUrls: ['./pokemomdetails.component.scss']
})
export class PokemomdetailsComponent implements OnInit {

  model: any;

  @Input() set url(v:string){
    if(v== null) return;
    this._client.get<any>(v).subscribe(x => this.model = x);
  }

  constructor(private _client: HttpClient) { }

  ngOnInit(): void {
  }

}
