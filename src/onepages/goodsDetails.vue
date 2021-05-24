<template>
  <div>
    <v-navgo></v-navgo>
    <h3>这是商品详情页面</h3>

    <div class="con">
      <div class="image">
        <img :src="$pre + arr.img" alt="" />
      </div>
      <p>
        <span>￥{{ arr.price }}</span>
        <em>市场价:￥{{ arr.market_price }}</em>
      </p>

      <h3>
        <p>{{ arr.goodsname }}</p>
        <span v-html="arr.description"></span>
      </h3>
    </div>

    <!-- <div class="goods" v-for="item in arr" :key="item.id">
      <img :src="$pre + item.img" alt="" />

      <div class="pricenew">价格：{{ item.price }}</div>
      <div class="price">市场价:{{ item.market_price }}</div>
      <p></p>
    </div> -->

   
    <!-- 底部提交 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车"  @click="addshopcar"/>
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import vNavgo from "../components/vNavgo";
import { goodsinfo,addshopcar } from "../request";
import { Toast } from 'vant';
export default {
  components: {
    vNavgo,
  },
  data() {
    return {
      arr: [],
      // num:1,
      goodsid:''
    };
  },
  created() {},
  mounted() {
    goodsinfo(this.$route.query.id).then((res) => {
      console.log(res);
      this.arr = res.data.list[0];
    });
    this.goodsid = this.$route.query.id
  },
  methods: {
    // 添加购物车页面事件。
    addshopcar() {
 

        addshopcar(this.goodsid).then(res=>{
          
        })
        Toast.success('添加购物车成功');
     
    //  this.$router.push("/home/shopcar")

  
    },
  },
};
</script>

<style scoped >
button {
  width: 2rem;
  height: 0.6rem;
  background-color: #ff6040;
}
.image {
  width: 100vw;
}
.image img {
  width: 100%;
}
.con p span {
  color: red;
  font-size: 0.5rem;
  margin-right: 0.1rem;
}
.con p em {
  color: #999;
  font-size: 0.3rem;
}
.con h3 p {
  font-size: 0.4rem;
  color: #333;
}
.van-goods-action{
    border-top: 1px solid #ccc;
}
.van-goods-action >>> .van-button__text{
  color: #fff !important; 
}

.van-toast >>> .van-toast__text{
  color: #fff;
}
</style>
