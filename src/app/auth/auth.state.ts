import { Injectable }                                  from '@angular/core';
import { Emittable, Emitter, EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { Selector, State, StateContext }               from '@ngxs/store';
// import { ALLHEROES }                                   from './auth.heroes';

// import { AuthAction } from './auth.actions';

export interface AuthStateModel {
  isAuthenticated: boolean;
}

@State<AuthStateModel>({
  name: 'heroes',
  defaults: {
    isAuthenticated: false
  }
})
@Injectable()
export class AuthState {

  @Emitter(AuthState.setAuthenticated)   static actSetAuthenticated: Emittable<void>;
  @Emitter(AuthState.setUnauthenticated) static actSetUnauthenticated: Emittable<void>;

  @Receiver()
  static setAuthenticated(
    ctx:    StateContext<AuthStateModel>,
    action: EmitterAction<void>
  ) {
    ctx.setState({
      isAuthenticated: true
    });
  }

  @Receiver()
  static setUnauthenticated(
    ctx:    StateContext<AuthStateModel>,
    action: EmitterAction<void>
  ) {
    ctx.setState({
      isAuthenticated: false
    });
  }

  @Selector()
  static getIsAuth(state: AuthStateModel) {
    return state.isAuthenticated;
  }
}

