import React from 'react';
import {connect} from 'react-redux';
import intl from 'react-intl-universal';
import './index.scss'

export interface Iprops {
    dispatch:any
}

const translator: React.FC<Iprops> = (props: Iprops) => {

    return (
        <div>
            <div className="test">
                {intl.get('TEST')}
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