import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  maVariable: string = 'World';

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.maVariable = 'Steve';}
      , 3000);
    }
  
}


