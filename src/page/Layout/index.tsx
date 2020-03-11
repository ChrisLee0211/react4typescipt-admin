import React, {useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { Layout } from 'antd';
import { History } from 'history'
import {connect} from 'react-redux'

import {MainContent} from './MainContent';
import MainHeader from './MainHeader';
import {SiderMenu} from './SiderMenu'

import { routerConfig } from '../../router/config';
import {RootState} from '../../store/reducer';
import {logout} from '../login/store/actions'
import "./index.scss"

export interface ComponentProps {
    history:History,
    dispatch:Dispatch
}

const LayoutComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
    const { Sider } = Layout;
    const { dispatch } = props;

    const headerCbs = useMemo(()=>{
        return bindActionCreators({
            logout
        },dispatch)
    },[dispatch])

    return (
        <Layout className="LayoutWrapper">
            <MainHeader {...headerCbs} {...props}/>
            <Layout>
                <Sider>
                    <SiderMenu config={routerConfig} {...props}/>
                </Sider>
                    <MainContent config={routerConfig} {...props}/>
            </Layout>
        </Layout>
    );
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
)(LayoutComponent);
