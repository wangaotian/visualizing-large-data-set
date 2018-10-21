// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import $ from "jquery";
import Vuex from 'vuex';
import  echarts  from 'echarts';
import  VueResource  from 'vue-resource';
import '../static/css/common.css';
import '../static/js/app.js';
import '../static/js/tagcanvas.js'


Vue.prototype.$echarts=echarts;
Vue.use(VueResource);
Vue.use(Vuex);
Vue.config.productionTip = false;
const store = new Vuex.Store({
  state:{
    //开始时间
      stateTime:'2018-03-10',
    //结束时间
      endTime:'2018-04-10',
    //webType
      ind:1,
    //页数
      pages:1,
    //数据
      arr:[],
      firstId: 2,
      firstName:"新华网",
      title:["中央","省级","城市级","全国"],
      wid:'13',
      webName:'中华新闻网',
      flag:1,
      //搜索
      search:'',
      //页数
      pageIndex:1,
  //    显示
      showTK:false,
  //    id
      ids:""
  },
  mutations:{
      //开始时间
      state(state,val){
          state.stateTime =val;
      },
      //结束时间
      end(state,val){
          state.endTime = val;
      },
      //webType
      ind(state,val){
          state.ind=val;
          state.pages=1;
      },
      //页数
      pages(state,val){
          state.pages=val;
      },
      arr(state,val){
          state.arr=val;
      },
      firstId(state,val){
          state.firstId=val;
      },
      firstName(state,val){
          state.firstName=val;
      },
      wid(state,val){
          state.wid=val;
      },
      webName(state,val){
          state.webName=val;
      },
      flag(state,val){
          state.flag=val;
      },
      search(state,val){
          state.search=val;
      },
      pageIndex(state,val){
          state.pageIndex=val;
      },
      //弹窗显示
      showTK(state,val){
          state.showTK=val;
      },
  //    id
      ids(state,val){
          state.ids=val;
      }
  },
  action:{
    increase (context, val) {
      context.commit('increment', val)
    },
    decline (context, val) {
      context.commit('decrement', val)
    }
  }
});


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
