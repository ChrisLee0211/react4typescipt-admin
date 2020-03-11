import React, { ReactElement } from 'react';
import { Menu } from 'antd'
import { routerConfigModel } from '../../router/config';
import { ClickParam } from 'antd/lib/menu';
import { History } from 'history'



export interface ComponentProps {
    config: routerConfigModel[],
    history:History
}

export const SiderMenu: React.FC<ComponentProps> = (props: ComponentProps) => {
    const { config,history } = props;
    const currentPath = history.location.pathname;
    return (
        <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[currentPath]}
        >
            {
                config.map(route => {
                    if(route.path === '/'){
                        return null
                    }else{
                        return siderRender(route,history)
                    }
                })
            }
        </Menu>
    )
}

/**
 * 递归生成路由的Menu
 * @param route 当前路由信息
 * @author chrislee
 * @Time 2020/2/22
 */
const siderRender: Function = (route: routerConfigModel,history:History): ReactElement => {
    const { SubMenu } = Menu;
    const handleClickMenu = (e:ClickParam) => {
        history.push(String(e.keyPath))
    }
    if (route.children) {
        return (
            <SubMenu
                key={route.path}
                title={
                    <span>
                        <span>{route.meta.title}</span>
                    </span>
                }
            >
                {
                    route.children.map(item => {
                       return siderRender(item)
                    })
                }
            </SubMenu>
        )
    } else {
        return (
            <Menu.Item key={route.path} onClick={handleClickMenu} >
                <div className="Layout-menuItem">
                    <span>{route.meta.title}</span>
                </div>
            </Menu.Item>
        )
    }
}