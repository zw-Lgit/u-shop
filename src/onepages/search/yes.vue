<template>
  <div>
  
    <ul v-if='this.list.length>0'>
      <li v-for='item in list' :key='item.id' @click='goodsDetails(item.id)'>
        <img :src="$pre+item.img" alt="">
        {{item.goodsname}}
      </li>
    </ul>
    <div v-else>请按回车获取结果，如果没有，请重新输入其他搜索内容</div>
  </div>
</template>

<script>
export default {
  props:['list'],
  data() {
    return {
      
    };
  },
  created() {},
  mounted() {},
  methods: {
      goodsDetails(id){
          this.$router.push('/goodsDetails?id='+id)
      }
  },
};
</script>

<style scoped >
li {
  border-bottom: 1px solid #ccc;
  margin: 10px 0;
  font-size: 0.4rem;
}
img{
  width: 1.6rem;
  
}
</style>
