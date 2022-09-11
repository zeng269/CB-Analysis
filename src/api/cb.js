import request from '@/utils/request'

export function getData(params) {
  return request({
    url: '/convertibleBond/data',
    method: 'get',
    params
  })
}