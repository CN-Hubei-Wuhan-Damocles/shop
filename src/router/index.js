import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// tabbar 路由
import Home from '../page/home'
import Vip from '../page/vip'
import Search from '../page/search'
import Cart from '../page/cart'
// home首页 路由
import News from '../page2/news'
import Imgs from '../page2/imgs'
import Goods from '../page2/goods'
import Videos from '../page2/videos'
import Message from '../page2/message'
import Contact from '../page2/contact'
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }, 
    {
      path: '/',
      redirect: "/home"
    },
    // home首页link
    {
      path: '/home/news',
      name: 'news',
      component: News
    }, 
    {
      path: '/home/imgs',
      name: 'imgs',
      component: Imgs
    }, 
    {
      path: '/home/goods',
      name: 'goods',
      component: Goods
    }, 
    {
      path: '/home/videos',
      name: 'videos',
      component: Videos
    }, 
    {
      path: '/home/message',
      name: 'message',
      component: Message
    }, 
    {
      path: '/home/contact',
      name: 'contact',
      component: Contact
    }, 
  ]
})
