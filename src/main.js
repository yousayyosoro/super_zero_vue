import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import { Message } from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import moment from 'moment'
import qs from 'qs'
import 'jquery'
import 'jquery.nicescroll'
let lodash = require('lodash');
import "babel-polyfill";

import common from './services/common'
import axios from './services/appServer'
import store from './store/appStore'
import layer from './services/layer'
import city from './services/city'
import codechange from './services/codeChange'
import messageBox from './services/messageBox'
import Jxconfig from './config'
import './util/filters-global' //格式化

// 富文本编辑器
import tinymce from 'tinymce'
import VueTinymce from '@packy-tang/vue-tinymce'
//样式
// import 'tinymce/skins/content/default/content.min.css'
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'

//主题
import 'tinymce/themes/silver'

//插件
import 'tinymce/plugins/link' //链接插件
import 'tinymce/plugins/image' //图片插件
import 'tinymce/plugins/media' //媒体插件
import 'tinymce/plugins/table' //表格插件
import 'tinymce/plugins/lists' //列表插件
import 'tinymce/plugins/quickbars' //快速栏插件
import 'tinymce/plugins/fullscreen' //全屏插件

//本地化
import './util/zh_CN.js'
// 引用museUI
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import theme from 'muse-ui/lib/theme';
import * as colors from 'muse-ui/lib/theme/colors';

theme.add('custom-theme', {
  primary: colors.indigo,
  secondary: colors.pinkA200
});

Vue.use(MuseUI);

Vue.prototype.$tinymce = tinymce;
Vue.use(VueTinymce);

Vue.config.productionTip = false;


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

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);

Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment;
Vue.prototype.$qs = qs;
Vue.prototype.$lodash = lodash;
Vue.prototype.$layer=layer;
Vue.prototype.$city=city;
Vue.prototype.$codeChange=codechange;
Vue.prototype.$messageBox=messageBox;
Vue.prototype.$common=common;

Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
