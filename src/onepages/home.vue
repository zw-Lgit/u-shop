<template>
  <div>
    <v-nav></v-nav>
    <router-view></router-view>
    <div class="navdown">
      <router-link to="index" active-class="select"> 首页 </router-link>
      <router-link to="sort" active-class="select"> 分类 </router-link>
      <router-link to="shopcar" active-class="select"> 购物车 </router-link>
      <router-link to="my" active-class="select"> 我的 </router-link>
    </div>

   
  </div>
</template>

<script>
import vNav from "../components/vNav";
export default {
  components: {
    vNav,
  },
  data() {
    return {
     
    };
  },
  created() {},
  mounted() {},
  methods: {
    
  },
};
</script>

<style scoped >
.select {
  color: blue;
}
.navdown {
  width: 100vw;
  display: flex;
  height: 1rem;
  border-top: 1px solid #ccc;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  line-height: 1rem;
  background-color: #fff;
}
a {
  flex: 1;
}


</style>
