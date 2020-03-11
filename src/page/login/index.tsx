import React, { useMemo } from 'react';
import LoginForm from './components/LoginForm';
import './index.scss'
import {History} from 'history'
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux'
import {RootState} from '../../store/reducer'

import {setloginStatus} from './store/actions'

export interface ComponentProps {
    history:History,
    dispatch:Dispatch
}

const Login: React.FC<ComponentProps> = (props: ComponentProps) => {
    const {
        dispatch
    } = props

    const Cbs = useMemo(()=>{
      return  bindActionCreators({
        setloginStatus,
      },dispatch)
    },[dispatch])
    return (
        <div className="login-wrap">
            <LoginForm {...Cbs} history={props.history} />
        </div>
    )
}
  
const mapStateToProps = (state:RootState) => {
    return state.login
  }
  const mapDispatchToProps = (dispatch:Dispatch) => {
    return { dispatch }
  }
export default connect(
      mapStateToProps,
      mapDispatchToProps
    )(Login)
