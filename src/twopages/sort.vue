<template>
    <div class="container">
       
        <div class="serch">
            <div class="a">
                按内容搜索
            </div>
        </div>
        <div class="body">
            <div class="left">
                <ul>
                    <li v-for='item in arr' :key='item.id'>{{item.catename}}</li>
                  
                </ul>
            </div>
            <div class="right" >
                 <div class="box" v-for='item in arrgoods' :key='item.id' >
                
                     <!-- 分类标题 -->
                     <h1>{{item.catename}}</h1>
                     <ul>
                       
                       <!-- 分类的每项 -->
                         <li v-for='item1 in item.children' :key='item1.id' @click='goGoodsDetails(item1.id)'>
                             <img :src="$pre+item1.img" alt="">
                             <span>{{item1.catename}}</span>
                         </li>
                         
                         
                     </ul>
               
                 </div>
               
            </div>
        </div>
    </div>
</template>

<script>
import {reqsort,reqcates} from '../request'
export default {
    data() {
        return {
            arr:[],
            arrgoods:[],
           
        };
    },
    created() {

    },
    
    mounted() {
      // 调取接口获取一级分类信息
      reqsort().then(res=>{
        
        this.arr = res.data.list
        
      }),
      reqcates().then(res=>{
        this.arrgoods = res.data.list
       
        
      
      })
    
      
    },
    methods: {
        goGoodsDetails(id){
         
           this.$router.push("/goodsDetails?id=" + id);
        }
    }
};
</script>

<style scoped >
.container {
  width: 7.5rem;
  margin: 0 auto;
}

.container .serch {
  width: 100%;
  height: 1.07rem;
  background-color: #FF6040;
  padding: 0.25rem 0.21rem;
}
.container .serch .a {
  position: relative;
  width: 7.11rem;
  height: 0.65rem;
  background-color: #fff;
  border-radius: 0.1rem;
  line-height: 0.65rem;
  text-indent: 0.7rem;
  font-family: PingFangSC-Regular;
  font-size: 0.28rem;
  color: #999999;
}
.container .serch .a::before {
  content: "";
  position: absolute;
  top: 0.16rem;
  left: 0.22rem;
  width: 0.36rem;
  height: 0.37rem;
  /* background: url(../icons/index/d.png) no-repeat; */
  background-size: 0.36rem auto;
}
.container .body {
  display: flex;
  background-color: #f1f1f1;
}
.container .body .left {
  width: 2.37rem;
  height: 11.79rem;
  background-color: #fff;
}
.container .body .left ul {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  font-family: PingFangSC-Light;
  font-size: 0.28rem;
  color: #999999;
}
.container .body .left ul li {
  margin-top: 0.61rem;
}
.container .body .left ul li:hover {
  color: #FF6040;
}
.container .body .right {
  margin-left: 0.3rem;
  height: 11.79rem;
  flex: 1;
  background-color: #f1f1f1;
  overflow: scroll;
}
.container .body .right .box {
  margin-top: 0.3rem;
  width: 4.66rem;
  height: 4.6rem;
  background-color: #fff;
  padding: 0.2rem 0.2rem;
  padding-right: 0rem;
}
.container .body .right .box h1 {
  font-family: PingFangSC-Semibold;
  font-size: 0.32rem;
  color: #333333;
}
.container .body .right .box ul {
  display: flex;
  flex-flow: row wrap;
}
.container .body .right .box ul li {
  margin-top: 0.2rem;
  margin-right: 0.18rem;
  width: 1.3rem;
  height: 1.62rem;
  background-color: #fff;
  text-align: center;
  line-height: 0.35rem;
  font-family: PingFangSC-Light;
  font-size: 0.24rem;
  color: #999999;
}
.container .body .right .box ul li img {
  width: 1.2rem;
  height: 1.2rem;
}

</style>
