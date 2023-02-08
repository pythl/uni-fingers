import Request from "luch-request"; // 使用npm
import baseUrl from "./config";
import loadStatus from "../common/loadStatus";
let header = {
  //   Authorization: authorize,
  //   "Content-Type": "application/json; charset=UTF-8",
};
const http = new Request({
  baseURL: baseUrl,
  header: header,
  method: "GET",
  dataType: "json",
  // 自定义params 处理函数
  paramsSerializer: null,

  // #ifndef MP-ALIPAY
  responseType: "text",
  // #endif

  // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
  custom: {}, // 全局自定义参数默认值

  // #ifdef H5 || APP-PLUS || MP-ALIPAY || MP-WEIXIN
  timeout: 10000,
  // #endif

  // #ifdef APP-PLUS
  sslVerify: true,
  // #endif

  // #ifdef H5
  // 跨域请求时是否携带凭证（cookies）仅H5支持（HBuilderX 2.6.15+）
  withCredentials: false,
  // #endif

  // #ifdef APP-PLUS
  firstIpv4: false, // DNS解析时优先使用ipv4 仅 App-Android 支持 (HBuilderX 2.8.0+)
  // #endif
  // 局部优先级高于全局，返回当前请求的task,options。请勿在此处修改options。非必填
  // getTask: (task, options) => {
  // 相当于设置了请求超时时间500ms
  //   setTimeout(() => {
  //     task.abort()
  //   }, 500)
  // },
  // 全局自定义验证器。参数为statusCode 且必存在，不用判断空情况。
  validateStatus: (statusCode) => {
    // statusCode 必存在。此处示例为全局默认配置
    return statusCode >= 200 && statusCode < 300;
  },
});

/**
 * 在请求之前拦截
 */
http.interceptors.request.use(
  (config) => {
    loadStatus.showLoading();
    return config;
  },
  (config) => {
    // 可使用async await 做异步操作
    return Promise.reject(config);
  }
);

/**
 * 在请求之后拦截
 */
http.interceptors.response.use(
  (response) => {
    loadStatus.endLoad();
    /* 对响应成功做点什么 可使用async await 做异步操作*/
    if (response.statusCode == 200) {
      // 服务端返回的状态码不等于200，则reject()
      return Promise.resolve(response.data);
    } else {
      // 服务端返回的状态码不等于200，则reject()
      return Promise.reject(response);
    }
  },
  (response) => {
    loadStatus.endLoad();
    /*  对响应错误做点什么 （statusCode !== 200）*/
    console.log(response);
    return Promise.reject(response);
  }
);
export default http;
