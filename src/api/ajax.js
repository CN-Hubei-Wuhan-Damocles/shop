import axios from 'axios'
import { Indicator } from 'mint-ui';
import qs from 'qs'
// 拦截器
axios.interceptors.request.use(function (config) {
    Indicator.open();
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    Indicator.close();
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


const get = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params })
            .then((res) => {
                resolve(res.data); //执行成功的回调函数
            })
            .catch(err => {
                reject(err);  // 执行失败的回调函数
            })
    })
}

const post = (url, params) => {
    // 传递的数据对象转字符串
    params = qs.stringify(params);
    new Promise((resolve, reject) => {
        axios.post(url, { params })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
    })
}

export default {
    get, post
}
