import React from 'react';
import {connect} from 'react-redux'
import './index.scss'

export interface Iprops {
    dispatch:any
}

const translator: React.FC<Iprops> = (props: Iprops) => {

    return (
        <div>
            <div className="test">
                示例页面
            </div>
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return state
  }
  const mapDispatchToProps = (dispatch:any) => {
    return { dispatch }
  }
  
  export default connect(
    mapStateToProps, mapDispatchToProps
  )(translator)