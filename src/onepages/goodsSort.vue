<template>
  <div>
    <v-navgo></v-navgo>

    <div v-if="arr.length > 0">
       <ul>
        <li v-for="item in arr" :key="item.id" @click="gogoodsDetail(item.id)">
          <img :src="$pre + item.img" alt="" />
          <p>{{ item.goodsname }}</p>
          <div class="price">{{ item.price }}</div>
        </li>
      </ul>
    </div>
    <div v-else>
        <p><img :src='require("../assets/images/暂无数据.png")'  alt="" class="no"></p>
    </div>
  </div>
</template>

<script>
import vNavgo from "../components/vNavgo";
import { reqgoodlist } from "../request";
export default {
  components: {
    vNavgo,
  },
  data() {
    return {
      arr: [],
    };
  },
  created() {},
  mounted() {
    reqgoodlist(this.$route.query.id).then((res) => {
      this.arr = res.data.list.goodData ? res.data.list.goodData : [];
      console.log(this.arr);
    });
  },
  methods: {
    gogoodsDetail(id) {
      this.$router.push("/goodsDetails?id=" + id);
    },
  },
};
</script>

<style scoped >
img {
  width: 3rem;
}
.no{
    width: 80%;
    display: block;
    margin: auto;
}
p{
    width: 100%;
    margin-top: 0.3rem;
}
</style>
