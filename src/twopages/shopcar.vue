<template>
  <div class="con">
    <div class="all">
      <div class="left">
        <input
          type="checkbox"
          name=""
          id=""
          v-model="ALLchecked"
          @change="checkedall"
        />
        全选
      </div>
      <div class="right">以免运费|领券</div>
    </div>
    <!-- 购物车商品 -->
    <van-swipe-cell v-for="(item, idx) in arr" :key="item.id">
      <template #default class="bj">
        <input
          class="inp"
          type="checkbox"
          name=""
          id=""
          v-model="item.checked"
          @change="changeone(idx)"
        />
        <van-card
          :num="item.num"
          :price="item.price"
          desc="描述信息"
          :title="item.goodsname"
          class="goods-card"
          :thumb="$pre + item.img"
        >
          <template #tags>
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </template>
          <template #footer>
            <!-- <van-button size="mini">按钮加</van-button>
          <van-button size="mini">按钮减</van-button> -->
            <button @click="jian(item.id, 1, idx)">-</button>
            <button @click="jia(item.id, 2)">+</button>
          </template>
        </van-card>
      </template>

      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="del(idx, item.id)"
        />
      </template>
    </van-swipe-cell>

    <div></div>

    <!-- 提交栏目 -->
    <van-submit-bar :price="allprice" button-text="提交订单" @submit="onSubmit">
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>






<script>
import { reqshopcarlist, reqshopcarDel, reqshopcaredit } from "../request";
export default {
  data() {
    return {
      ALLchecked: "",
      // checked: "",
      price: "",

      arr: [],
      isrequst: true,
    };
  },
  created() {},
  mounted() {
    this.init();
  },

  // 计算属性
  computed: {
    // 总价
    allprice() {
      let sum = 0;
      this.arr.map((item) => {
        if (item.checked) {
          sum += item.num * item.price;
        }
      });
      return sum * 100;
    },
  },

  //封装额方法
  methods: {
    init() {
      // 调取购物车列表接口
      reqshopcarlist().then((res) => {
        this.isrequst = true;
        let arr = res.data.list ? res.data.list : [];
        //[{id:1,checked:false},{id:2,checked:true}]
        let checkedArr = this.arr.map((item) => ({
          id: item.id,
          checked: item.checked,
        }));
        arr.forEach((item) => {
          item.checked = checkedArr.find((i) => i.id == item.id)
            ? checkedArr.find((i) => i.id == item.id).checked
            : false;
        });
        this.arr = arr;
      });
    },

    // 点击提交订单触发的事件
    onSubmit() {
      let submitorder = {
        countmoney: this.allprice/100,
        ountnumber: this.arr.reduce((val,item)=>{
              if(item.checked){
                  return  val = val + item.num
              }else{
                  return val
              }
        
        },0),
        address: "",
        idstr: "",
      };

      sessionStorage.setItem("oredr",JSON.stringify(submitorder) )
      console.log(submitorder);
      this.$router.push("/orderok");
    },

    // 点击修改地址触发的事件
    onClickEditAddress() {
      console.log("修改地址");
    },

    // 增加数量事件
    jia(id, type) {
      // 调取购物车修改接口
      reqshopcaredit(id, type).then((res) => {
        this.init();
      });
    },
    // 减少数量事件
    jian(id, type, idx) {
      if (this.arr[idx].num <= 1) {
        return;
      } else {
        if (this.isrequst) {
          this.isrequst = false;
          // 调取购物车修改接口
          reqshopcaredit(id, type).then((res) => {
            this.init();
          });
        }
      }
    },

    // 删除按钮事件
    del(idx, id) {
      this.arr.splice(idx, 1);
      reqshopcarDel(id).then((res) => {});
    },

    // 封装一个单选事件
    changeone(idx) {
      this.ALLchecked = this.arr.every((item) => item.checked);
    },

    //封装一个全选事件
    checkedall() {
      this.arr.forEach((item) => {
        item.checked = this.ALLchecked;
      });
    },
  },
};
</script>

<style scoped >
.con {
  background-color: #f3f3f3;
  overflow: scroll;
  height: 90vh;
}
.van-swipe-cell {
  margin: 0.2rem 0;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
.van-button__text {
  color: #fff !important;
}

.van-submit-bar {
  position: absolute;
  left: 0;
  bottom: 1rem;
}
.anniu {
  color: #000;
}
.van-card__footer button {
  border: 1px solid #ccc;
  padding: 0.1rem 0.2rem;
  border-radius: 0.1rem;
  margin-left: 0.2rem;
}
.con >>> .van-swipe-cell__wrapper {
  background-color: #fff !important;
}
.inp {
  position: absolute;
  left: 0.2rem;
  top: 1rem;
  z-index: 100;
}
.all {
  display: flex;
  padding: 0.2rem 0.3rem;
  background-color: #fff;
}
.left {
  flex: 1;
}
</style>
