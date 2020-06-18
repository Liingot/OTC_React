import request from '../../utils/request'


export function getInit(data) {  //头部信息
    return request({
        url: '/goods/intentionOrderCount',
        method: 'post',
        params: data
    });
}