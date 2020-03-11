import React, { useCallback } from 'react';
import {Layout,Tooltip} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import {UserInfo} from '../login/interface'
import { History } from 'history'
import { Dispatch } from 'redux';


export interface ComponentProps {
    history:History,
    logout:Function
    dispatch:Dispatch
}

const MainHeader: React.FC<ComponentProps> = (props: ComponentProps) => {

    const {Header} = Layout;
    const {history,logout} = props;
    const handlelogout = useCallback(()=>{
        logout()
        history.push('/login')
    },[history,logout])
    return (
        <Header className="Layout-Header">
            <div className="Layout-Header-left">
                react-ts-template
            </div>
            <div className="Layout-Header-right">
                <div className="user">Hi~</div>
                <Tooltip title="登出">
                    <LogoutOutlined className='logout-icon' onClick={handlelogout}/>
                </Tooltip>
            </div>
        </Header>
    )
}

export default MainHeader