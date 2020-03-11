import { message } from "antd";

//用户信息字段
export interface UserInfo {
    address: string
    area: string
    email: string
    id: number
    logo: string
    mobile: string
    nickname: string
    portrait: string
    sex: number
    slv_pwd: string
    slv_url: string
    slv_user: string
    telephone: string
    username: string
}

//用户信息接口
export interface UserInfoResponse {
    code:number,
    message:{
        menu:Array<any>,
        user:UserInfo
    }
}