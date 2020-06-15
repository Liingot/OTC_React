import request from '../utils/request'

export function areaQueryByPage(data) { //获取网省
    return request({
        url: '/area/queryByPage',
        method: 'post',
        params: data,
    })
}

export function login(data) {
    return request({
        url: '/authentication/login',
        method: 'post',
        params: data
    })
}


export function getUsetInfo() {
    return request({
        url: '/index/userInfo',
        method: 'post',
    })
}