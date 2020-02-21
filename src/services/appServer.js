import jxConfig from '../config';
import axios from 'axios';
import { Message } from 'element-ui';
import { Loading } from 'element-ui';
import router from '../router/index'
let cancel, promiseArr = {};
const CancelToken = axios.CancelToken;

//请求拦截器
axios.interceptors.request.use(config => {
    //发起请求时，取消掉当前正在进行的相同请求
    // if (promiseArr[config.url]) {
    //   promiseArr[config.url]('操作取消')
    //   promiseArr[config.url] = cancel
    // } else {
    //   promiseArr[config.url] = cancel
    // }
    let a = jxConfig;
    config.headers['token'] = jxConfig.userInfo === null ? "" : jxConfig.userInfo.token;
    config.headers['platform'] = 'web';
    return config
}, error => {
    return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    // if (response.data.code !== 0) {
    //   // MessageBox("提示", response.data.msg);
    //   Message({
    //     showClose: true,
    //     message: response.data.msg,
    //     type: 'warning'
    //   });
    // }
    if (response.config.url === response.config.baseURL + jxConfig.loginUrl) {
        jxConfig.userInfo = response.data.data;
    }
    return response
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = jxConfig.responseStatus._400
                break;
            case 401:
                err.message = jxConfig.responseStatus._401;
                //token过期重定向到登录页
                router.push({path:'/'});
                break;
            case 403:
                err.message = jxConfig.responseStatus._403
                break;
            case 404:
                err.message = jxConfig.responseStatus._404
                break;
            case 405:
                err.message = jxConfig.responseStatus._405
                break;
            case 408:
                err.message = jxConfig.responseStatus._408
                break;
            case 500:
                err.message = jxConfig.responseStatus._500
                break;
            case 501:
                err.message = jxConfig.responseStatus._501
                break;
            case 502:
                err.message = jxConfig.responseStatus._502
                break;
            case 503:
                err.message = jxConfig.responseStatus._503
                break;
            case 504:
                err.message = jxConfig.responseStatus._504
                break;
            case 505:
                err.message = jxConfig.responseStatus._505
                break;
            default:
                err.message = `连接错误${err.response.status}`
        }
    } else {
        err.message = "连接到服务器失败"
        Loading.close();
    }
    //MessageBox("提示", err.message);
    Message({
        showClose: true,
        message: err.message,
        type: 'warning'
    });
    return Promise.resolve(err.response)
})

axios.defaults.baseURL = jxConfig.serviceUrl;
//设置默认请求头
// axios.defaults.headers = {
//   'X-Requested-With': 'XMLHttpRequest'
// }
axios.defaults.timeout = jxConfig.timeout;

export default {
    post(url, param, showcode) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                data: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                if (res.data.code === 0 && showcode) {
                    Message({
                        showClose: true,
                        message: res.data.msg,
                        type: 'success'
                    });
                } else if (res.data.code !== 0) {
                    Message({
                        showClose: true,
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
                resolve(res)
            })
        })
    },
    postAll(postArray) {
        return new Promise((resolve, reject) => {
            axios.all(postArray).then(axios.spread(function(acct, perms) {
                resolve(acct, perms);
            }));
        })
    },
    get(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                data: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            })
        })
    },
    ajax_post: function(url, param, callback) {
        $.ajax({
            url: jxConfig.serviceUrl + url,
            async: false,
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(param),
            success: callback
        });
    },
    setSha256(data) {
        let sha256 = require("js-sha256").sha256;
        return sha256(data);
    }
}