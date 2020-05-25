import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  newItem: string;

  items: Article[];

  constructor() { }

  ngOnInit(): void {
    this.items = [];
  }

  add() {
    this.items.push({
      item: this.newItem,
      count: 1,
      isChecked: false
    });
    this.newItem = null;
  }

  addOne(index :number)
  {
    this.items[index].count++;
  }

  removeOne(index: number)
  {
    this.items[index].count--;
    if(this.items[index].count == 0) this.remove(index);
  }

  remove(index: number)
  {
    this.items.splice(index,1);
  }

  check(elem : any)
  {
    elem.isChecked = !elem.isChecked;
  }
}
