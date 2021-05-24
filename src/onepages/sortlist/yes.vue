<template>
  <div>
    <h3>有数据组件</h3>
    <ul>
      <li v-for='(item,idx) in goods' :key='idx' @click='goodsDetails(item.id)'>
        <h4>{{item.name}}</h4>
        <p>￥{{item.price}}</p>
      </li>
    
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
}
</style>
