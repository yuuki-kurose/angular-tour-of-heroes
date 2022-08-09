import { Injectable }                    from '@angular/core';
import { Receiver }                      from '@ngxs-labs/emitter';
import { Selector, State, StateContext } from '@ngxs/store';

export interface AuthStateModel {
  isAuthenticated: boolean;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isAuthenticated: false
  }
})
@Injectable()
export class AuthState {

  @Receiver()
  static setAuthenticated(ctx: StateContext<AuthStateModel>) {
    ctx.setState({
      isAuthenticated: true
    });
  }

  @Receiver()
  static setUnauthenticated(ctx: StateContext<AuthStateModel>) {
    ctx.setState({
      isAuthenticated: false
    });
  }

  
}