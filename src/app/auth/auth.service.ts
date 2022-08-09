import { ALLHEROES }  from './auth.heroes';
import { AuthState }  from './auth.state';
import { Injectable } from '@angular/core';
import { Hero }       from '../hero';



@Injectable()
export class AuthService {
  // 仮で変数と型を定義しておく
  heroes$!: Hero[];
  ['authState']: any;

  initAuthListener() {
    // 
    this.heroes$.subscribe((user: any) => {
      if (user) {
        AuthState.actSetAuthenticated.emit();
        
      } else {
        
        AuthState.actSetUnauthenticated.emit();
        
      }
    });
  }
}
