/**
 * 后台请求设置
 */
import axios from 'axios'
// import {Notification} from 'element-ui'
import { serverUrl } from './configByEnv.js'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = serverUrl;

axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    if (error.response.status === 401) {
        alert(401);
        // Notification({
        //   title: '权限无效',
        //   message: '您的用户信息已经失效, 请重新登录',
        //   type: 'warning',
        //   offset: 48
        // });
        // window.location.href = '/#/login'
    } else {
        alert('请求错误');
        // Notification({
        //   title: '请求错误',
        //   message: `${error.response.status} \n ${error.config.url}`,
        //   type: 'error',
        //   offset: 48,
        // })
    }
    return Promise.reject(error)
})

/**
 * 后台请求函数
 */
class Server implements Server.IServer {
    getUserList_async(curSlnId: number): Promise<string[]> {
        return axios.get(`/api/solution/${curSlnId}/users`).then((res: any) => res)
    }
}

export default new Server()