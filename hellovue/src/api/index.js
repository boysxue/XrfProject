import request from '@/request'

export function getT(data) {
    return request({
        url:'/rest/api3.do?api=mtop.common.getTimestamp',
        method:'get',
        params:data
    })
}