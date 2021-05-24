<template>
  <div class="con">
    <v-nav></v-nav>
    <div class="concent">
      <div class="logo">
        <img :src="require('../assets/images/orange.png')" alt="" />
      </div>
      <div class="tel">
        手机号：<input type="text"  v-model="tel" />
      </div>
      <div class="pass">
        密码：<input type="text"  v-model="pass" />
      </div>
      <button class="btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import vNav from "../components/vNav";
import axios from "axios";
export default {
  components: {
    vNav,
  },
  data() {
    return {
      tel: "10086",
      pass: "123",
    };
  },
  created() {},
  mounted() {
      
  },
    
  methods: {
    //   点击登录事件判断
    login() {
        if(this.tel === '' || this.pass === ''){
          alert('用户名或者密码不能为空')
          return
        }
        axios({
          url:'/api/login',
          method:'post',
          data:{
            phone:this.tel,
            password:this.pass
          }
        }).then(res=>{
            alert(res.data.msg)
            console.log(res);
            if(res.data.code == 200){
              sessionStorage.setItem("islogin", JSON.stringify(res.data.list));
              this.$router.push('/home')
      

            }
        })
     
    },
  },
};
</script>

<style scoped >
.con {
  background-color: #f2f2f2;
  width: 100%;
  height: 13.34rem;
}
.concent {
  width: 7.1rem;
  height: 12.04rem;
  background-color: #fff;
  margin: auto;
  margin-top: 0.3rem;
  overflow: hidden;
}
.logo {
  text-align: center;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
}
.tel {
  width: 80%;
  height: 1rem;
  margin: auto;
}
.pass {
  width: 80%;
  height: 1rem;
  margin: auto;
}
input {
  height: 0.6rem;
  border-bottom: 1px solid #ccc;
}
.btn {
  width: 80%;
  height: 1rem;
  background-color: #ff6040;
  margin: auto;
  color: #fff;
  display: block;
}
</style>
