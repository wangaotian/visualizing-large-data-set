import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes=[
    {
        path:'/',
        redirect:'/index'
    },
    {
        path: "/index",
        component: resolve => require(['@/components/index/main'], resolve)
    },
    {
        path: "/index/detail",
        component: resolve => require(['@/components/detail/mainDetail'], resolve)
    },
    {
        path: "/index/article",
        component: resolve => require(['@/components/article/mainarticle'], resolve)
    },
    {
        path: "/index/search",
        component: resolve => require(['@/components/search/search'], resolve)
    },
];
const router=new VueRouter({
    routes,
});
export default router;


