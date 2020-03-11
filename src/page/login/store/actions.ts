
import {ThunkAction} from 'redux-thunk'
import {Action,Dispatch} from 'redux'
import {createBrowserHistory} from 'history'

export const ACTION_SET_LOGIN_STATUS = "SET_LOGIN_STATUS"

interface SetLoginStatusAction {
    type: typeof ACTION_SET_LOGIN_STATUS,
    isLogin:boolean
}


interface IPersonState {}

type ThunkResult<R,T> = ThunkAction<
  R,
  IPersonState,
  undefined,
  Action<T>
>

export const setloginStatus:(loginStatus:boolean)=>SetLoginStatusAction = (loginStatus) => {
    return {
        type: ACTION_SET_LOGIN_STATUS,
        isLogin: loginStatus
    }
}

/**
 * 登出系统
 * @author chrislee
 * @Time 2020/3/6
 */
export const logout = ():ThunkResult<void,SetLoginStatusAction> => async (dispatch:Dispatch) => {
    localStorage.removeItem('token');
    const history = createBrowserHistory();
    history.push('/login')
    dispatch(setloginStatus(false))
}

export type LoginActionTypes = SetLoginStatusAction