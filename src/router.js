import Vue from 'vue'
import VueRouter from "vue-router"

//引入组件
// import home from "./components/home/home.vue"


//告诉vue使用vueRouter
Vue.use(VueRouter)

const routes = [
    {
        path : '/home',
        component: () => import('./components/home/home')
    },
    {
        path : '/blog',
        name : 'blogList',
        // redirect : {name: 'blogList'},
        component: () => import("./components/blog/blog"),
        children:[
            {
                path:'view/:id',
                name: 'blogView',
                props:true,
                component: () => import('./components/blog/blogdetail')
            }
        ]
    },
    { path: "/", redirect: "/home" },{
        path: '/cart',
        name:'/cart',
        component: () => import('./components/cart/carthome')
    }
]
var router = new VueRouter({
    routes
})
export default router;