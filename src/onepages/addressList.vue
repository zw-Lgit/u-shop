<template>
  <div>
    <v-navgo></v-navgo>
    <ul>
      <li>
        <p>删除</p>
        <h4><span>lzw</span> <em>15003940000</em> <b>默认</b></h4>
        <h5>
          <p>北京市朝阳区王四营镇</p>
          编辑
        </h5>
      </li>
    </ul>
    <div class="newaddress" @click="goaddressAdd">新增收货地址</div>
  </div>
</template>

<script>
import vNavgo from "../components/vNavgo";

export default {
  components: {
    vNavgo,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    goaddressAdd(){
        this.$router.push('/addressAdd')
    },
  },
};
</script>

<style scoped >
.newaddress {
  width: 80%;
  height: 1rem;
  border-radius: 1rem;
  background-color: #ff6040;
  position: absolute;
  left: 10%;
  bottom: 10%;
  text-align: center;
  line-height: 1rem;
  color: #fff;
  font-size: 0.35rem;
}
li {
  width: 100%;
  height: 2rem;
  padding: 0.4rem;
  margin: 0.3rem 0;
  border-bottom: 1px solid #eee;
}
h4 b {
  background-color: red;
  color: #fff;
  border-radius: 0.04rem;
  padding: 0.02rem;
}
h5 {
  display: flex;
}
h5 p {
  flex: 1;
}
</style>
