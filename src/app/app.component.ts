import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var Config = {
      apiKey: "AIzaSyA6ejhWUf4xhGErn_6ZjyL02WkpPXSjXj8",
      authDomain: "devnet-angular.firebaseapp.com",
      databaseURL: "https://devnet-angular.firebaseio.com",
      projectId: "devnet-angular",
      storageBucket: "devnet-angular.appspot.com",
      messagingSenderId: "819134065031",
      appId: "1:819134065031:web:7c0799e0b8972e6bc20b22"

    }
    firebase.initializeApp(Config);
  }
  title = 'DemoAngular';
}
