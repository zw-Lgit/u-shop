// 封装请求数据接口

import axios from "axios"
import Vue from "vue"
import router from "../router"
import qs from "qs"



//开发环境 8080
if (process.env.NODE_ENV==="development") {
    Vue.prototype.$pre = "http://localhost:3000"
}

//生产环境：打包后的代码 3000
if (process.env.NODE_ENV==="production") {
    Vue.prototype.$pre = ""
}





//请求拦截:每一次发请求给后端，需要统一加的参数在请求拦截中做，比如加token
//请求拦截return的内容就是后端收到的真正的请求信息
axios.interceptors.request.use(config=>{
    // if(localStorage.getItem("userInfo")){
    //     config.headers.authorization=JSON.parse(localStorage.getItem("userInfo")).token
    // }

    sessionStorage.getItem("islogin")&&( config.headers.authorization=JSON.parse(sessionStorage.getItem("islogin")).token)
    return config
})






//响应拦截:每一次，后端返回的数据，统一操作在响应拦截中处理
//响应拦截return的内容就是组件收到的数据
axios.interceptors.response.use(res=>{
    //统一处理失败
    if(res.data.code!==200){
        alert(res.data.msg)
    }

    //掉线处理
    if(res.data.msg=="登录已过期或访问权限受限"){
        //跳转login
        router.push("/login")
    }

    console.log("本次请求路径是："+res.config.url)
    console.log(res)
    return res;
})


// 获取一级分类信息(首页快速分类导航)
export let reqsort = ()=>axios({
        url:'/api/getcate',
        method:'get'
})
// 获取一个商品信息
export let goodsinfo = (id)=>axios({
        url:'/api/getgoodsinfo',
        method:'get',
        params:{
            id:id
        }
})

// 获取一级分类下的所有商品
export let reqgoodlist = (id)=>axios({
        url:'/api/getgoodlist',
        method:'get',
        params:{

            cateid:id,
            type:1
        }
})

// 获取轮播图接口
export let getbnner = ()=>axios({
        url:'/api/getbanner',
        method:'get',
})

// 获取商品信息(首页)
export let reqgoodsinfo = ()=>axios({
        url:'/api/gethortgoods',
        method:'get',
})

// 获取商品全部分类信息(全部分类，数据呈递归树状)
export let reqcates = ()=>axios({
        url:'/api/getcates',
        method:'get',
})

// 搜索（like模糊搜索）
export let reqsearch = (list)=>axios({
        url:'/api/search',
        method:'get',
        params:{
            keywords:list
        }
})

// 购物车添加
export let addshopcar = (goodsid)=>axios({
    url:'/api/cartadd',
    method:'post',
    data:{
        uid:JSON.parse( sessionStorage.getItem('islogin')).uid,
        goodsid:goodsid,
        num:1,
        authorization:JSON.parse( sessionStorage.getItem('islogin')).token
    }
})

// 购物车列表
export let reqshopcarlist = ()=>axios({
    url:'/api/cartlist',
    method:'get',
    params:{
        uid:JSON.parse( sessionStorage.getItem('islogin')).uid,
        authorization:JSON.parse( sessionStorage.getItem('islogin')).token
        
    }
})

//购物车删除
export let reqshopcarDel = (id)=>axios({
    url:'/api/cartdelete',
    method:'post',
    data:{
        id
    }
})

// 购物车修改
export let reqshopcaredit = (id,type)=>axios({
    url:'/api/cartedit',
    method:'post',
    data:{
        id,
        type
    }
})

// 订单生成
// export let req = (price,number)=>axios({
//     url:'',
//     method:'',

//     data:{
//             uid:JSON.parse( sessionStorage.getItem('islogin')).uid,
//             countmoney:price,
//             ountnumber:number,
//             address:'',
//             idstr:''
//     }
// })
