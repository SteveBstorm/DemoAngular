import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  nombre : number;

  constructor() { }

  ngOnInit(): void {
    this.nombre = 0;
  }

  decrease() {
    this.nombre--;
  }

  increase() {
    this.nombre++;
  }
}
