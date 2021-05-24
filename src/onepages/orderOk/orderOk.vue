<template>
    <div>
    
            <v-navgo></v-navgo>
            
            <div class="address" ><p @click='goaddressList'>点击完善收货地址</p></div>

            <div class="con">
                <p class="h3"><b>品牌精选</b><span>以免运费|领券</span> </p>
                <div class="content">
                   
                    <img src="" alt="">
                    <div class="right">
                         <div class="title">小米手机</div>
                    <div class="price">2999.</div>
                    
                    <div class="num"> <p>七天无理由退货</p> <em>*2</em></div>
                    </div>
                   
                </div>
                <div class="message"> 
                    <p>发票类型</p> 
                    <strong class="b">不开发票</strong >
                    </div>
                <div class="message"> <p>售后免邮</p> <strong class="b">部分商家赠送</strong ></div>
                <div class="message"> <p>买家留言</p> <strong class="b">
                  请填写留言，45字以内  </strong ></div>
                <div class="message"> <p>商品金额</p> <strong class="b"></strong >￥200</div>
                
                <div class="message"> <p>优惠券</p> <strong class="b"></strong >更多优惠券</div>
             
            </div>
    </div>
</template>

<script>
import vNavgo from '../../components/vNavgo'
export default {
    components:{
            vNavgo
    },
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        goaddressList(){
            this.$router.push('/addressList')
        }
    }
};
</script>

<style scoped >
    .address{
        width: 90vw;
        height: 2rem;
        margin: auto;
        border: 1px solid #ff6700;
        /* background-color: #fff; */
    }
    .address p {
        width: 50%;
        height: 1rem;
        border: 1px solid #ff6700;
        margin: .4rem auto;
        text-align: center;
        line-height: 1rem;
        color: #ff6700;
        background-color: #fff0e7;
        
    }
    .h3{
        margin-top: 0.2rem ;
        width: 100%;
        padding:0 0.4rem ;
        height: .5rem;
        display: flex;
    }
    .h3 b{
        color: #333;
        flex: 1;
    }
    .h3 span{
        color: #ff6700;
        /* flex: 1; */
    }
    .content{
        width: 80%;
        height: 3rem;
        border: 1px solid red;
        margin: auto;
        display: flex;
    }
    .content img{
        width: 2rem;
        height: 2rem;
    } 
    .message{
         width: 100%;
        padding:0 0.4rem ;
        display: flex;
        margin: 0.2rem 0;


    }
    .message p {
        flex: 1;
    }
    .message  .b{
        color: #999  ;
    }
</style>
