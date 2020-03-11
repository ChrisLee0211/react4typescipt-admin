import { Reducer } from 'redux';

export interface translatorReducerState{

}

const initialState:translatorReducerState = {

}

const translator:Reducer = (state=initialState,action) => {
  const {type,payload} = action
  switch (type) {
    case 'TEST_ACTION':
      return payload
    default:
      return state
  }
}

export default translator