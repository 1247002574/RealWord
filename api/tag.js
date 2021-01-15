import { request } from '@/plugins/request'
// import request from '@/utils/request'

export const getTags = () =>
  request({
    method: 'GET',
    url: '/api/tags',
  })
