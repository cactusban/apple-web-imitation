import { AxiosHeaders } from 'axios'
import hyRequest from '.'
interface LoginParams {
  email: string
  password: string
}
export function loginRequest(data: LoginParams) {
  return hyRequest.post({
    url: '/login',
    headers: new AxiosHeaders(),
    data: {
      email: data.email,
      password: data.password,
    },
  })
}
