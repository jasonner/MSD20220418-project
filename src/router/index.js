import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/view/login.vue";
import IndexPage from "@/view/index.vue";
import UploadImg from "@/view/uploadImg.vue";
import SignIn from "@/view/signIn.vue";
Vue.use(Router)
export const constantRouterMap =[
    {
        path:'/',
        name:'登录页',
        redirect:'/login',
        menuShow:false
    },
    {
        path:'/login',
        name:'登录页',
        component: Login,
        menuShow:false
    },   
    {
        path:'/index',
        name:'首页',
        component: IndexPage,
        menuShow:false
    }, 
    {
        path:'/uploadImg',
        name:'上传图片',
        component: UploadImg,
        menuShow:false
    }, 
    {
        path:'/signIn',
        name:'签到',
        component: SignIn,
        menuShow:false
    },  
    {
        path: "*",
        redirect: "/login"
    }
]

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
 
export default new Router({
    routes: constantRouterMap
})
