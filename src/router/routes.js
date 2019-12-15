/*
  所有路由配置的数组
*/
import MSite from '@/pages/MSite/MSite.vue'
import Order from '@/pages/Order/Order.vue'
import Search from '@/pages/Search/Search.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Login from '@/pages/Login/Login.vue'
export default [
  {
    path:'/msite',
    component:MSite,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/order',
    component:Order,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      isShowFooter:true
    }
  },

  {
    path:'/login',
    component:Login
  },
  {
    path:'/',
    redirect:'/msite'
  },
]