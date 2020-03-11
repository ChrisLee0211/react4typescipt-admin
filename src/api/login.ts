import request from '../utils/request';

export function getFrontRoute() {
    return request({
      url: `rbac/auth-assignment/basic-view`,
      method: 'get'
    })
  }

export function handleLogOut() {
    return request({
        url: 'site/logout',
        method: 'get'
      })
  }

