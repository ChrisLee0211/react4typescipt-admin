# raect4typescript-admin
一个基于`react+typescript`搭建的基础项目，内置了一般CMS最基础的逻辑如路由控制、登陆登出等功能，以及提前存放了在`typescript`加持下关于`redux`、`react-router`以及编写hook、FC组件的示例，适合拿来用作基础项目搭建，只需按照内置示例的格式配置好路由就可以开始基于左侧菜单进行模块开发。

### 一、使用方法
安装依赖：
```
npm install
```
本地运行：
```
npm run dev
```

### 二、开发流程
- （1）在`src/router/config.ts`中配置路由:
```typescript
import Example from '../page/Example'
import NewComponent from '../page/NewComponent'


export interface routerConfigModel {
    path:string,
    component?:any,
    auth?:boolean,
    meta:MetaItem,
    children?:routerConfigModel[]
}

interface MetaItem {
    title:string,
    icon?:string,
    role:string
}

export const routerConfig:routerConfigModel[] = [
    {
        path: '/',
        component:Example,
        auth:true,
        meta:{title:'主页',role:'home-index'},
    },
    {
        path: '/example',
        component:Example,
        auth:true,
        meta:{title:'示例模块',role:'example-index'},
    },
    //以下为新增页面
    {
        path: '/new',
        component:NewComponent,
        auth:true,
        meta:{title:'新增页面',role:'example-index'},
    },
]
```

- 2、在`src/page`中，以自己在路由里配置的组件名新建文件夹,并且建立对应的入口文件以及样式文件，以上面的*newComponent*为例:
```
--src
|--Example
|--NewComponent
    |-- index.tsx
    |-- index.scss

```
- 3、在新增的组件入口中编写业务代码:
```tsx
import React from 'react';
import './index.scss'

export interface ComponentProps {

}

const NewComponet: React.FC<ComponentProps> = (props: ComponentProps) => {
    return (
        <div>
            新组件
        </div>
    )
}

export default NewComponet
```

基本流程如上所示。


# 三、未来新增
鉴于该脚手架只包含了基础的开发环境以及业务组件，未来会考虑集成更多CMS业务中常用的功能，如国际化、多文本编辑器、导出Excel等。

---
 
 
### 更新日志：

- 2020.03.14
> 新增了自定义hook工具`useViewport`，用于监测屏幕大小返回当前的width和height，基于`useContext`和`useEffect`开发

用法:  
(1)在`/src/index.tsx`中导入,并包裹App组件
```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import ViewportProvider from './utils/hook/useViewport'
import store from './store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ViewportProvider>
            <App/> 
        </ViewportProvider>
    </Provider>,
document.getElementById('root'));
```
(2)在需要使用的组件中，引入`useViewport`:
```tsx
import React from 'react';
import {useViewport} from '../../utils/useViewport'
import './index.scss'

export interface Iprops {
    dispatch:any
}

const translator: React.FC<Iprops> = (props: Iprops) => {
    const {width,height} = useViewport()
    return (
        <div>
            <div className="test">
                {width},{height}
            </div>
        </div>
    )
}
```

- 2020.03.18
> 加入阿里巴巴团队的```react-intl-universal```作为国际化的方案，具体用法请参考[react-intl-universal](https://github.com/alibaba/react-intl-universal)