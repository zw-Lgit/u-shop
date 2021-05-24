import Vue from 'vue'
import VueRouter from 'vue-router'
// 一级组件
import home from '../onepages/home.vue'
import login from '../onepages/login.vue'
import register from '../onepages/register/register.vue'

// 二级组件
import index from '../twopages/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    // name: 'home',
    component: home,
    children: [
      {
        path:'index',
        component:index,
        meta:{
          title:"首页",
        }
      },
      {
        path:'sort',
        component:()=>import('../twopages/sort.vue'),
        meta:{
          title:"分类",
        },
      },
      {
        path:'shopcar',
        component:()=>import('../twopages/shopcar.vue') ,
         meta:{
          title:"购物车",
        },
      },
      {
        path:'my',
        component:()=>import('../twopages/my.vue'),
        meta:{
          title:"个人中心",
        },
      },
      {
        path:'',
        redirect:'index'
      }
    ]
  },
  {
    path:'/login',
    component:login,
    name:'login',
    meta:{
      title:"登录",
    }
  },
  {
    path:'/register',
    component:register,
    name:'register',
    meta:{
      title:"注册",
    }
  },
  {
    path:'/sortlist',
    component:()=>import('../onepages/sortlist/sortlist.vue'),
    name:'sortlist',
    meta:{
      title:"分类列表",
    }
  },
  {
    path:'/search',
    component:()=>import('../onepages/search/search.vue'),
    name:'search',
    meta:{
      title:"搜索",
    }
  },
  {
    path:'/goodsDetails',
    component:()=>import('../onepages/goodsDetails.vue'),
    name:'goodsDetails',
    meta:{
      title:"商品详情",
    }
  },
  {
    path:'/goodsSort',
    component:()=>import('../onepages/goodsSort.vue'),
    name:'goodsSort',
    meta:{
      title:"商品列表",
    }
  },
  {
    path:'/orderok',
    component:()=>import('../onepages/orderOk/orderOk.vue'),
    name:'orderOk',
    meta:{
      title:"确认订单",
    }
  },
  {
    path:'/addressList',
    component:()=>import('../onepages/addressList.vue'),
    name:'addresslist',
    meta:{
      title:"地址管理",
    }
  },
  {
    path:'/addressAdd',
    component:()=>import('../onepages/addressAdd.vue'),
    name:'addressAdd',
    meta:{
      title:"新增地址",
    }
  },
  {
    path:'*',
    redirect:'/login'
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 全局路由前置守卫
// router.beforeEach((to,from,next)=>{
//   // 如果去登录那么放行
//   if( to.path === '/login' ){
//     next()
//     return
//   } 
//   let islogin = sessionStorage.getItem('islogin')
//   if(islogin){
//     next()
//     return
//   }
//   next('login')
// })

export default router
