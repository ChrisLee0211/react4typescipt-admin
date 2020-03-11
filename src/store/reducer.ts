import {combineReducers} from 'redux';
import login from '../page/login/store/reducers'
import example from '../page/Example/store/reducers'


const reducer = combineReducers({
    login,
    example}
);

export default reducer
export type RootState = ReturnType<typeof reducer>