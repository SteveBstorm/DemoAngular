import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items: NbMenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { link: '/home', title: 'Home', icon: 'home'},
      { link: '/about', title: 'About', icon: 'alert-triangle'},
      { title: 'Demo', icon: 'book', children: [
        { link: '/demo/demo1', title: 'Demo 1 - Bindings'},
        { link: '/demo/demo2', title: 'Demo 2 - Event'},
        { link: '/demo/demo3', title: 'Demo 3 - Pipe'},
        { link: '/demo/demo4', title: 'Demo 4 - Binding Two-Way'},
        { link: '/demo/demo5', title: 'Demo 5 - Structural Directives'},
        { link: '/demo/demo6', title: 'Demo 6 - Services et promesses'},
        { link: '/demo/demo7', title: 'Demo 7 - Formulaires'},
        { link: '/demo/demo8', title: 'Demo 8 - Custom Validator'},
        { link: '/demo/demo9', title: 'Demo 9 - Guard'},
        { link: '/demo/demo10', title: 'Demo 10 - Input Output'},
        { link: '/demo/demo11/pokedex', title: 'Demo 11 - ConsumeApi '}

      ]},
      { title: 'Exercices', icon: 'book-open-outline', children: [
        { link: 'exercice/exo1', title: 'Exo 1 - Chrono'},
        { link: 'exercice/exo2', title: 'Exo 2 - Shopping List'},

      ]}
    ];
  }

}
