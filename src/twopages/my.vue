<template>
    <div>
        <div class="container">
        <!-- <header class="header">
            <div class="iconfont icon-arrow-left-bold a">
            </div>
            <div class="b">
                我的
            </div>
            <div class="c"></div>
        </header> -->
        <div class="body">
            <div class="nav">
                <div class="a">
                    <img :src="$pre + user.avatarurl" alt="">
                    <div class="b">
                        <span>用户名：{{user.nickname}}</span>
                        <div>用户电话号：{{user.phone}}</div>
                    </div>
                </div>
                <div class="c">
                    <span>每日签到</span>
                </div>
            </div>
            <div class="nav1">
                <ul>
                    <li>
                        <span>12</span>
                        <i>我的收藏</i>
                    </li>
                    <li>
                        <span>12</span>
                        <i>浏览记录</i>
                    </li>
                    <li>
                        <span>¥0</span>
                        <i>我的红包</i>
                    </li>
                    <li>
                        <span>12</span>
                        <i>优惠券</i>
                    </li>
                </ul>
            </div>
            <div class="box">
                <div class="a">
                    <span>我的订单</span>
                    <i>全部订单	〉</i>
                </div>
                <ul>
                    <li>
                        <a href="">
                           <img src="./icons/user/order/delivery.png" alt="">
                            <span>待付款</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                           <img src="./icons/user/order/evaluation.png" alt="">
                            <span>待付款</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                           <img src="./icons/user/order/payment.png" alt="">
                            <span>待付款</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                           <img src="./icons/user/order/service.png" alt="">
                            <span>待付款</span>
                        </a>
                    </li>
                   
                </ul>
            </div>
        </div>
        <div class="foot">
            <ul>
                <li>
                    <div class="a">
                        <img src="./icons/user/function/address.png" alt="">
                        <span>地址管理 </span>
                    </div>
                    <div class="b"> 〉</div>
                </li>
                <li>
                    <div class="a">
                        <img src="./icons/user/function/free.png" alt="">
                        <span>我的钱包 </span>
                    </div>
                    <div class="b"> 〉</div>
                </li>
                <li>
                    <div class="a">
                        <img src="./icons/user/function/partner.png" alt="">
                        <span>我的二维码</span>
                    </div>
                    <div class="b"> 〉</div>
                </li>
                <li>
                    <div class="a">
                        <img src="./icons/user/function/QR_code.png" alt="">
                        <span>我的小伙伴 </span>
                    </div>
                    <div class="b"> 〉</div>
                </li>
                <li>
                    <div class="a">
                        <img src="./icons/user/function/wallet.png" alt="">
                        <span>0元使用 </span>
                    </div>
                    <div class="b"> 〉</div>
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user:{}
        };
    },
    created() {

    },
    mounted() {
        this.user = JSON.parse(sessionStorage.getItem('islogin'))
        
    },
    methods: {

    }
};
</script>

<style scoped >
    .container {
  width: 7.5rem;
  margin: 0 auto;
  background-color: #f2f2f2;
  height: 13.6rem;
}



.container .body {
  position: relative;
  height: 4.25rem;
  background-color: #FF6040;
}
.container .body .nav {
  width: 100%;
  height: 1.75rem;
  background-color: #FF6040;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.23rem 0 0.23rem 0.2rem;
}
.container .body .nav .a {
  display: flex;
  align-items: center;
}
.container .body .nav .a img {
  border-radius: 60%;
  width: 1.3rem;
  height: 1.3rem;
}
.container .body .nav .a .b span {
  font-family: PingFangSC-Semibold;
  font-size: 0.36rem;
  color: #FFFFFF;
}
.container .body .nav .a .b div {
  margin-top: 0.25rem;
  font-family: PingFangSC-Regular;
  font-size: 0.2rem;
  color: #FFFFFF;
  border: 1px solid #FFFFFF;
}
.container .body .nav .c {
  position: relative;
  width: 1.55rem;
  height: 0.4rem;
  background-color: #ffd5cc;
  font-family: PingFangSC-Regular;
  font-size: 0.2rem;
  color: #FF6243;
  text-align: center;
  line-height: 0.4rem;
  border-radius: 0.2rem 0 0 0.2rem;
}
.container .body .nav .c::before {
  content: '';
  position: absolute;
  top: 0.04rem;
  left: 0.07rem;
  width: 0.32rem;
  height: 0.32rem;
  /* background: url(../icons/red_envelopes.png) no-repeat; */
  background-size: 0.32rem auto;
}
.container .body .nav1 {
  width: 100%;
  height: 0.7rem;
  background-color: #FF6040;
}
.container .body .nav1 ul {
  display: flex;
}
.container .body .nav1 ul li {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container .body .nav1 ul li span {
  font-family: PingFangSC-Semibold;
  font-size: 0.36rem;
  color: #FFFFFF;
  text-align: center;
  line-height: 0.28rem;
}
.container .body .nav1 ul li i {
  margin-top: 0.12rem;
  font-family: PingFangSC-Light;
  font-size: 0.2rem;
  color: #FFFFFF;
  text-align: center;
  line-height: 0.2rem;
}
.container .body .box {
  padding: 0.22rem;
  width: 7.13rem;
  height: 2.07rem;
  background-color: #fff;
  position: absolute;
  top: 2.71rem;
  left: 0.2rem;
  border-radius: 0.1rem;
}
.container .body .box .a {
  height: 0.7rem;
  display: flex;
  justify-content: space-between;
}
.container .body .box .a span {
  font-family: PingFangSC-Semibold;
  font-size: 0.32rem;
  color: #333333;
  line-height: 0.32rem;
}
.container .body .box .a i {
  font-family: PingFangSC-Regular;
  font-size: 0.24rem;
  color: #FF6040;
  line-height: 0.24rem;
}
.container .body .box ul {
  display: flex;
}
.container .body .box ul li {
  flex: 1;
}
.container .body .box ul li a {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container .body .box ul li a img {
  width: 0.66rem;
  height: 0.55rem;
}
.container .foot {
  margin-top: 0.75rem;
  width: 100%;
  height: 5.2rem;
  background-color: #fff;
}
.container .foot ul {
  display: flex;
  flex-direction: column;
}
.container .foot ul li {
  margin-top: 0.08rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container .foot ul li .a {
  display: flex;
  align-items: center;
}
.container .foot ul li .a img {
  margin: 0.2rem;
  width: 0.35rem;
  height: 0.35rem;
}
.container .foot ul li .a span {
  font-family: PingFangSC-Semibold;
  font-size: 0.24rem;
  color: #333333;
  line-height: 0.24rem;
}
.container .foot ul li .b {
  margin: 20px ;
  font-family: PingFangSC-Light;
  font-size: 0.24rem;
  color: #666666;
  line-height: 0.24rem;
}

</style>
