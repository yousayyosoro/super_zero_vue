import Vue from 'vue'
import App from './App'
import router from './router'
// import 'swiper/dist/css/swiper.css'
// import Viewer from 'v-viewer'
// import 'viewerjs/dist/viewer.css'
import { Message } from 'element-ui';
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import moment from 'moment'
// import qs from 'qs'
// let lodash = require('lodash');
import "babel-polyfill";

// import common from './services/common'
import axios from './services/appServer'
import store from './store/appStore'
// import layer from './services/layer'
// import city from './services/city'
// import codechange from './services/codeChange'
import messageBox from './services/messageBox'
import Jxconfig from './config'
import './util/filters-global' //格式化

// 引用museUI
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';


Vue.use(MuseUI);


//配置导航守卫
/*router.beforeEach((to, from, next) => {
	let authResult=false;
	if(to.meta.role!=='*'){
	  let userInfo=Jxconfig.userInfo;
	  $(to.meta.role).each(function(index,item){
		if(item===userInfo.role[0].roleId){
		  authResult=true;
		  next(true);
		  return false;
		}
	  });
	  /!*if(!authResult){
		Message({
		  showClose: true,
		  message:"权限不足",
		  type: 'warning'
		});
	  }*!/
	}else{
	  if (to.matched.length === 0) {                                        //如果未匹配到路由
		from.name ? next({ name: from.name }) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
	  } else {
		next(true);                                                                            //如果匹配到正确跳转
	  }
	}
  });
  router.afterEach((to, from) => {
	// ...
	if (from.fullPath == '/portal') {
	  //alert('页面信息保存成功！');
	}
  });*/

// Vue.config.productionTip = false;
// Vue.use(VueAwesomeSwiper);

Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment;
// Vue.prototype.$qs = qs;
// Vue.prototype.$lodash = lodash;
// Vue.prototype.$layer=layer;
// Vue.prototype.$city=city;
// Vue.prototype.$codeChange=codechange;
Vue.prototype.$messageBox=messageBox;
// Vue.prototype.$common=common;

/*Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})*/

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
