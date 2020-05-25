import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.scss']
})
export class Demo10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAnswer($event: boolean){
    console.log($event);
  }
}
