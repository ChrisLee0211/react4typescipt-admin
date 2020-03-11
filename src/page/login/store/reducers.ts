import { Reducer } from 'redux';
import {LoginActionTypes,ACTION_SET_LOGIN_STATUS} from './actions';
export interface loginState {
  isLogin:boolean,
}

const initialState:loginState = {
  isLogin:false
}

const login:Reducer<loginState,LoginActionTypes> = (state = initialState, action:LoginActionTypes):loginState => {
    switch (action.type) {
      case ACTION_SET_LOGIN_STATUS:
        return {
          ...state,...{isLogin:action.isLogin}
        };
      default:
        return state
    }
  }

  export default login