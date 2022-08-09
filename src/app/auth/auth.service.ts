import { Injectable }     from '@angular/core';
import { AuthState }      from './auth.state';
import { AuthStateModel } from './auth.state';

@Injectable()
export class AuthService {
  afAuth$?: AuthStateModel;
  

  initAuthListener() {
    this.afAuth$.authState.subscribe(user => {
      if (user) {
        AuthState.actSetAuthenticated.emit();
        
      } else {
        
        AuthState.actSetUnauthenticated.emit();
        
      }
    });
  }

  

}