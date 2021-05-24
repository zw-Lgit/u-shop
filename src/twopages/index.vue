<template>
  <div>
    <div class="container">
      <!-- 搜索和商品列表栏目 -->
      <div class="search">
        <div class="search_1">
          <div class="a">
            <img :src="require('./icons/index/b.png')" alt="" />
          </div>
          <div class="b">
            <img :src="require('./images/pic/logo/white.png')" alt="" />
          </div>
          <div class="c" @click="gosearch">
            <span>按内容搜索</span>
          </div>
          <div class="d">
            <img :src="require('./icons/index/c.png')" alt="" />
          </div>
        </div>

        <div class="hotwrods" style="overflow: hidden">
          <div class="a">
            <ul>
              <li>
                <span
                  v-for="item in arr"
                  :key="item.id"
                  @click="gosort(item.id)"
                >
                  {{ item.catename }}</span
                >
              </li>
            </ul>
          </div>
          <div class="b"><span>分类</span></div>
        </div>
      </div>

      <!-- banner区域 -->
      <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in banner" :key="item.id"
            ><img :src="$pre + item.img" alt=""
          /></van-swipe-item>
        </van-swipe>

        <div class="c">
          <ul>
            <li>
              <a href="">
                <span class="icon-icon1"></span>
                <span>限时秒杀</span>
              </a>
            </li>
            <li>
              <a href="" title="畅销商品">
                <span class="icon-icon2"></span>
                <span>畅销商品</span>
              </a>
            </li>
            <li>
              <a href="" title="品质大牌">
                <span class="icon-icon3"></span>
                <span>品质大牌</span>
              </a>
            </li>
            <li>
              <a href="" title="小U自营">
                <span class="icon-icon4"></span>
                <span>小U自营</span>
              </a>
            </li>
            <li>
              <a href="" title="积分商城">
                <span class="icon-icon5"></span>
                <span>积分商城</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="body">
        <div class="a">
          <img :src="require('./images/图层0.png')" alt="" />
        </div>
        <div class="b">
          <div class="c">
            <img :src="require('./images/图层2.png')" alt="" />
          </div>
          <div class="d">
            <img :src="require('./images/图层1.png')" alt="" />
          </div>
        </div>
      </div>

     


      <div class="navto">
        <span v-for="(item,index) in navs" :key="item" :class="index==n?'select':''" @click="n=index">
          {{item}}</span>
      </div>

      <div v-if="goodsList.length>0">
         <div class="goods" v-for='item in goodsList[n].content' :key='item.id'>
              <div class="goods_left">
                <img :src="$pre + item.img" alt="">
              </div>
              
               <div class="goods_right">
                   <h3>{{item.goodsname}}1</h3>
              <p>原价：{{item.price | filterPrice}}</p>
              <em>市场价：{{item.market_price | filterPrice}}</em>
              <hr>
              <button class="goods_btn" @click='goGoodsDetails(item.id)'>购买</button>
               </div>
            
            </div>
      </div>
     
      <div class="bottom">

      </div>
    </div>
  </div>
</template>

<script>
import { reqsort, getbnner,reqgoodsinfo } from "../request";
export default {
  data() {
    return {
      n:0,
      navs:['热门推荐','上新推荐','所有商品'],
      goodsList:[],
      arr: [],
      banner: [],
      goodsinfo0:[],
      goods: [
        {
          name: "小米手机",
          price: "2999.00",
          id: "1",
        },
        {
          name: "华为电脑",
          price: "5999.00",
          id: "2",
        },
        {
          name: "iphone12 pro max",
          price: "12999.00",
          id: "3",
        },
        {
          name: "三星s21",
          price: "4999.00",
          id: "4",
        },
      ],
    };
  },
  created() {},
  mounted() {
    // 获取商品列表接口
    reqsort().then((res) => {
      this.arr = res.data.list;
    });

    // 获取轮播图接口
    getbnner().then((res) => {
      this.banner = res.data.list;
    });

    // 获取首页商品信息
    reqgoodsinfo().then(res=>{
      this.goodsList=res.data.list;
      // this.goodsinfo0 =  res.data.list[0].content
      // console.log(res.data.list);
      // console.log(res.data.list[1]);
      // console.log(this.goodsinfo0);
      
     
    })
  },
  methods: {
    // 跳转去搜索页面事件
    gosearch() {
      this.$router.push("/search");
    },
    // 跳转去商品分类页面
    gosort(id) {
      this.$router.push("/goodsSort?id=" + id);
    },
    goGoodsDetails(id) {
      this.$router.push("/goodsDetails?id=" + id);
    },
   
  },
};
</script>

<style scoped>
.select{
  background-color: #f26b11;
  color: #fff;
}
.container {
  width: 7.5rem;
  margin: 0 auto;
}

.container .search {
  background-color: #ff6040;
  width: 100%;
  height: 1.6rem;
  padding-top: 0.2rem;
  background: -webkit-linear-gradient(top, #ff6040, #ff8a80);
}
.container .search .search_1 {
  width: 100%;
  height: 0.65rem;
  display: flex;
  justify-content: space-between;
}
.container .search .search_1 .a {
  width: 0.42rem;
  height: 0.52rem;
  margin: 0.1rem 0 0 0.16rem;
}
.container .search .search_1 .a img {
  width: 0.42rem;
}
.container .search .search_1 .b {
  margin-top: 0.09rem;
  width: 1.86rem;
  height: 0.56rem;
}
.container .search .search_1 .b img {
  width: 2rem;
}
.container .search .search_1 .c {
  position: relative;
  width: 3.44rem;
  height: 0.65rem;
  background-color: #fff;
  border-radius: 0.1rem;
  line-height: 0.65rem;
}
.container .search .search_1 .c::before {
  content: "";
  position: absolute;
  width: 0.35rem;
  height: 0.35rem;
  /* background-image: url(./icons/index/d.png); */
  background-size: 0.35rem 0.35rem;
  margin: 0.15rem 0.25rem;
}
.container .search .search_1 .c span {
  font-size: 0.27rem;
  margin-left: 0.7rem;
  color: #ccc;
}
.container .search .search_1 .d {
  margin-top: 0.1rem;
  margin-right: 0.23rem;
  width: 0.46rem;
  height: 0.52rem;
}
.container .search .search_1 .d img {
  width: 0.46rem;
}
.container .search .hotwrods {
  width: 100%;
  height: 0.76rem;
  padding-top: 0.21rem;
  display: flex;
}

.container .search .hotwrods .a {
  flex: 1;
  overflow: scroll;
}
.container .search .hotwrods .a ul {
  display: flex;
  height: 0.56rem;
}
.container .search .hotwrods .a ul li {
  flex: 1;
  line-height: 0.56rem;
  font-family: PingFangSC-Regula;
  font-size: 0.28rem;
  display: flex;

  text-align: center;
}
.container .search .hotwrods .a ul li span {
  margin: 0 0.05rem;
  color: #fff3f2;
  flex: 1;
  width: 1.3rem;
}
.container .search .hotwrods .b {
  width: 1.3rem;
  line-height: 0.56rem;
  border-left: 1px solid #c04c34;
}
.container .search .hotwrods .b::before {
  content: "";
  position: absolute;
  width: 0.3rem;
  height: 0.3rem;
  /* background-image: url(./icons/index/e.png); */
  background-size: 0.3rem 0.3rem;
  margin: 0.13rem 0 0 0.13rem;
  text-align: center;
}
.container .search .hotwrods .b span {
  margin-left: 0.5rem;
  font-family: PingFangSC-Regular;
  font-size: 0.24rem;
  color: #fff3f2;
}

.my-swipe .van-swipe-item img {
  width: 7.5rem;
  height: 3.5rem;
}

.container .banner .a .c {
  border-radius: 0.8rem;
}
.container .banner .c {
  width: 100%;
  height: 1.61rem;
}
.container .banner .c ul {
  height: 100%;
  display: flex;
}
.container .banner .c ul li {
  flex: 1;
}
.container .banner .c ul li a {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: PingFangSC-Light;
  font-size: 0.2rem;
  color: #333333;
  text-align: center;
}
.container .banner .c ul li a [class^="icon"] {
  margin-top: 0.3rem;
  width: 0.6rem;
  height: 0.62rem;
  background: url(./icons/index/kingkong/seckill.png) no-repeat;
  background-size: 0.6rem auto;
}
.container .banner .c ul li:nth-child(2) .icon-icon2 {
  background: url(./icons/index/kingkong/top.png) no-repeat;
  background-size: 0.6rem auto;
}
.container .banner .c ul li:nth-child(3) .icon-icon3 {
  background: url(./icons/index/kingkong/selfsupport.png) no-repeat;
  background-size: 0.6rem auto;
}
.container .banner .c ul li:nth-child(4) .icon-icon4 {
  background: url(./icons/index/kingkong/integral.png) no-repeat;
  background-size: 0.6rem auto;
}
.container .banner .c ul li:nth-child(5) .icon-icon5 {
  background: url(./icons/index/kingkong/brand.png) no-repeat;
  background-size: 0.6rem auto;
}
.container .body {
  width: 100%;
  height: 3.93rem;
  background-color: #f2f2f2;
  padding: 0.23rem 0.28rem;
  display: flex;
}
.container .body .a {
  flex: 1;
}
.container .body .a img {
  width: 100%;
}
.container .body .b {
  margin-left: 0.1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.container .body .b img {
  width: 100%;
}
.container .body .b .c {
  flex: 1;
}
.container .body .b .c img {
  width: 100%;
}
.container .body .b .d {
  margin-top: 0.1rem;
  flex: 1;
}
.container .body .b .d img {
  width: 100%;
}
.container .submenu {
  box-sizing: border-box;
  height: 1.11rem;
  background-color: #ffffff;
  padding: 0.2rem;
}
.container .submenu ul {
  width: 100%;
  height: 100%;
  display: flex;
}
.container .submenu ul li {
  width: 180px;
  background-color: #ffffff;
  line-height: 0.7rem;
  text-align: center;
  color: #000000;
  font-size: 0.25rem;
  border: 1px solid #d0d0d0;
}
.container .submenu ul li:nth-child(1) {
  background-color: #f26b11;
  color: #fff;
}
.container .main {
  box-sizing: border-box;
  height: 9.94rem;
  background-color: #ffffff;
  padding: 0rem 0.2rem;
}
.container .main ul {
  width: 100%;
  height: 100%;
}
.container .main ul li {
  height: 3rem;
  background-color: #ffffff;
  margin-bottom: 0.31rem;
  display: flex;
}
.container .main ul li .left {
  width: 3.1rem;
  background-color: #ffffff;
}
.container .main ul li .left img {
  width: 2.2rem;
  height: 2.2rem;
  margin: 0.53rem 0.5rem 0.25rem 0.4rem;
}
.container .main ul li .right {
  width: 4.02rem;
  background-color: #ffffff;
  padding: 0.45rem 1.18rem 0.1rem 0;
}
.container .main ul li .right .a {
  height: 0.3rem;
  background-color: #ffffff;
  font-size: 0.3rem;
  color: #2d2d2d;
}
.container .main ul li .right .b {
  margin-top: 0.27rem;
  height: 0.28rem;
  font-size: 0.3rem;
  color: #ed3638;
  background-color: #ffffff;
}
.container .main ul li .right .c {
  margin-top: 0.27rem;
  height: 0.27rem;
  font-size: 0.3rem;
  color: #979797;
  background-color: #ffffff;
}
.container .main ul li .right .d {
  margin-top: 0.27rem;
  height: 0.54rem;
  background-color: #ffffff;
}
.container .main ul li .right .d button {
  width: 1.65rem;
  height: 0.54rem;
  background-color: #f26b11;
  font-size: 0.25rem;
  color: #fff;
  border-radius: 0.05rem;
}
.container .footer {
  box-sizing: border-box;
  height: 1.2rem;
  background-color: #ffffff;
  padding-top: 0.15rem;
}
.container .footer ul {
  width: 100%;
  height: 100%;
  display: flex;
}
.container .footer ul li {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 0.92rem;
  width: 0.55rem;
  font-size: 0.22rem;
  text-align: center;
  line-height: 0.39rem;
  color: #898989;
}
.container .footer ul li:nth-child(1) {
  color: #fe6b04;
}
.container .footer ul li img {
  width: 0.56rem;
}
.goods{
  width: 7.1rem;
  height: 3rem;
  background-color: #fff;
  margin: 0.2rem;
  display: flex;
  border: 1px solid #eee;
  border-radius: 0.1rem;
  box-shadow: 3px 3px 16px #eee;
}
.goods_left img{
  width: 2.2rem;
  height: 2.2rem;

}
.goods .goods_right h3{
  font-size: 0.5rem;
  color: #333;
}
.goods .goods_right p{
  font-size: 0.4rem;
  color: red;
}
.goods .goods_right em{
  font-size: 0.3rem;
  color: #999;
}
.goods_btn{
  width: 1.4rem;
  height: .5rem;
  background-color: #f26b11;
  border-radius: 0.10rem;
  color: #fff;
}
.navto{
  width: 100vw;
  display: flex;
  margin: 0.2rem 0;
}
.navto span{
  flex: 1;
  text-align: center;
  border: 1px solid #ccc;
  padding: 0.1rem 0;

}

.bottom{
  height: 1rem;
}
</style>
