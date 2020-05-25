import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { ExerciceComponent } from './components/exercice/exercice.component';
import { Exo1Component } from './components/exercice/exo1/exo1.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Exo2Component } from './components/exercice/exo2/exo2.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { NewUserComponent } from './components/demo/demo7/new-user/new-user.component';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';
import { Demo9Component } from './components/demo/demo9/demo9.component';
import { AuthGuardService } from './services/auth-guard.service';
import { Demo10Component } from './components/demo/demo10/demo10.component';
import { PokedexComponent } from './components/demo/demo11/compenents/pokedex/pokedex.component';
import { PokedexresolverService } from './components/demo/demo11/resolver/pokedexresolver.service';
import { PokemomdetailsComponent } from './components/demo/demo11/compenents/pokemomdetails/pokemomdetails.component';
import { PokemonresolverService } from './components/demo/demo11/resolver/pokemonresolver.service';
import { Pokemomdetails2Component } from './components/demo/demo11/compenents/pokemomdetails2/pokemomdetails2.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'demo', component: DemoComponent, children: [
    { path: 'demo1', component: Demo1Component},
    { path: 'demo2', component: Demo2Component},
    { path: 'demo3', component: Demo3Component},
    { path: 'demo4', component: Demo4Component},
    { path: 'demo5', component: Demo5Component},
    { path: 'demo6', component: Demo6Component},
    { path: 'demo7', component: Demo7Component},
    { path: 'demo7/new-user', component: NewUserComponent},
    { path: 'demo8', component: Demo8Component},
    { path: 'demo9',canActivate: [AuthGuardService], component: Demo9Component},
    { path: 'demo10', component: Demo10Component},
    { path: 'demo11/pokedex',resolve : {tutu: PokedexresolverService}, component: PokedexComponent},
    { path: 'demo11/pokemondetails/:url', component: PokemomdetailsComponent},
    { path: 'demo11/pokemondetails2/:url', resolve: { poke: PokemonresolverService}, component: Pokemomdetails2Component},
      

  ]},
  { path: 'exercice', component: ExerciceComponent, children: [
    {path : 'exo1', component: Exo1Component},
    {path : 'exo2', component: Exo2Component},
  ]},
  { path: 'notfound', component: FourOFourComponent},
  { path: '**', redirectTo: '/notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
