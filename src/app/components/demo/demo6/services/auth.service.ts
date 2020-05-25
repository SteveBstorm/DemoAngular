import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false;

  constructor() { }

  signIn()
  {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          ()=> {
            this.isAuth= true;
            if(this.isAuth) resolve(console.log("ca marche"));
            else reject(console.log("ca plante"));
          }, 2000);
      }
    );
  }

  signOut()
  {
    this.isAuth = false;
  }
}
