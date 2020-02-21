const IP = {
    local: 'http://49.234.27.114:8888',
    dev: 'http://api.jianxunsoft.com',
    qas: 'http://120.78.141.13:8090',
    uat: 'http://api.jianxunsoft.com',
    prod: 'http://api.madehome.com.cn'
}
console.log(IP[process.env.NODE_ENV]);
export default {
    serviceUrl: IP[process.env.NODE_ENV], //服务器IP地址
    debug: false,
    loginUrl: '/Edison/auth/login',
    refreshTokenUrl: '/Edison/auth/refreshToken',
    timeout: 60000,
    userInfo: sessionStorage.getItem('userInfo') !== null ? JSON.parse(sessionStorage.getItem('userInfo')) : null,
    mock: false,
    testName: 'javon',
    responseStatus: {
        _400: '账号已在另一设备登录',
        _401: '未授权，请重新登录',
        _403: '拒绝访问',
        _404: '请求错误,未找到该资源',
        _405: '请求方法未允许',
        _408: '请求超时',
        _500: '服务器端出错',
        _501: '网络未实现',
        _502: '网络错误',
        _503: '服务不可用',
        _504: '网络超时',
        _505: 'http版本不支持该请求',
    }
}
