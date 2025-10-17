import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios'

export interface HYInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestFailureFn?: (error: any) => any
  responseSuccessFn?: (response: T) => T
  responseFailureFn?: (error: any) => any
}
export interface HYRequestConfig<T = AxiosResponse>
  extends InternalAxiosRequestConfig {
  interceptors?: HYInterceptors<T>
}
