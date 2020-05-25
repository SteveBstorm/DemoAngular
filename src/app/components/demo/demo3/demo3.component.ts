import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  maVar1: string = 'salut les gars';
  maVar2: number = 10;
  maVar3: Date = new Date();

  maVar4: number = 243;
  constructor() { }

  ngOnInit(): void {
  }

}
