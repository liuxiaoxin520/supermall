import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由懒加载写法
const Home = () => import('../views/home/Home')
const Flashpay = () => import('../views/flashpay/Flashpay')
const Navigation = () => import('../views/navigation/Navigation')
const Profile = () => import('../views/profile/Profile')

// 解决浏览器重复点击跳转路由时报错
function originalFun(name) {
  let originalPush = VueRouter.prototype[name]
  VueRouter.prototype[name] = function replace(location) {
    return originalPush.call(this, location).catch(err => err)
  }
}
originalFun('push')
originalFun('replace')

// 配置路由映射关系
const routes = [
  {
    path: '',
    redirect:'/home' //重定向
  },
  {
    path:'/home',
    name:'首页',
    component:Home,
  },
  {
    path:'/flashpay',
    name:'加油闪付',
    component:Flashpay,
  },
  {
    path:'/navigation',
    name:'油站导航',
    component:Navigation,
  },
  {
    path:'/profile',
    name:'个人中心',
    component:Profile,
  }
]

// 实例化VueRouter对象
const router = new VueRouter({
  mode:'history',
  routes
})

// 导出router
export default router

