import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbIconModule, NbCardModule, NbInputModule, NbDatepickerModule, NbListModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { ToTimePipe } from './pipes/to-time.pipe';
import { ExerciceComponent } from './components/exercice/exercice.component';
import { Exo1Component } from './components/exercice/exo1/exo1.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Exo2Component } from './components/exercice/exo2/exo2.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { AuthService } from './components/demo/demo6/services/auth.service';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { NewUserComponent } from './components/demo/demo7/new-user/new-user.component';
import { UserService } from './components/demo/demo7/services/user.service';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';
import { Demo9Component } from './components/demo/demo9/demo9.component';
import { AuthGuardService } from './services/auth-guard.service';
import { Demo10Component } from './components/demo/demo10/demo10.component';
import { AlertComponent } from './components/demo/alert/alert.component';
import { Demo11Component } from './components/demo/demo11/demo11.component';
import { PokedexComponent } from './components/demo/demo11/compenents/pokedex/pokedex.component';
import { PokemomdetailsComponent } from './components/demo/demo11/compenents/pokemomdetails/pokemomdetails.component';
import { PokemonService } from './components/demo/demo11/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { Pokemomdetails2Component } from './components/demo/demo11/compenents/pokemomdetails2/pokemomdetails2.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    ToTimePipe,
    ExerciceComponent,
    Exo1Component,
    Demo4Component,
    Demo5Component,
    Exo2Component,
    Demo6Component,
    Demo7Component,
    NewUserComponent,
    Demo8Component,
    FourOFourComponent,
    Demo9Component,
    Demo10Component,
    AlertComponent,
    Demo11Component,
    PokedexComponent,
    PokemomdetailsComponent,
    Pokemomdetails2Component,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,    
    FormsModule,
    ReactiveFormsModule,
    NbDatepickerModule.forRoot(),
    NbListModule,
    HttpClientModule,
    NbToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuardService,
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
