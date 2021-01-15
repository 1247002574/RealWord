import { request } from '@/plugins/request'
// import request from '@/utils/request'

export const login = (data) =>
  request({
    method: 'post',
    url: '/api/users/login',
    data,
  })

export const register = (data) =>
  request({
    method: 'post',
    url: '/api/users',
    data,
  })

export const getProfile = ({ username }) =>
  request({
    method: 'GET',
    url: `/api/profiles/${username}`,
  })

export const getUser = () => {
  return request({
    method: 'GET',
    url: '/api/user',
  })
}

export const updateUser = (data) => {
  return request({
    method: 'PUT',
    url: '/api/user',
    data,
  })
}
