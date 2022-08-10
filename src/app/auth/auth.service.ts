import { AuthState }      from './auth.state';
import { Injectable }     from '@angular/core';
// インターフェースのコンポーネント
import { Hero }           from '../hero';
// 仮のモックデータをインポート
import { ALLHEROES }      from './auth.heroes';



@Injectable()
export class AuthService {

  // 仮で変数と型を定義しておく
  heroes$?: Hero;
  authState?: AuthStateModel;

  initAuthListener() {
    this.authState.subscribe((hero) => {
      if (hero) {
         AuthState.actSetAuthenticated.emit();
        
      } else {
        
        AuthState.actSetUnauthenticated.emit();
        
      }
   });
  }
}
