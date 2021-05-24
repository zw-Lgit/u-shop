<template>
    <div>
        
        <v-navgo></v-navgo>
         <div class="concent">
      <div class="logo">
        <img :src="require('../../assets/images/orange.png')" alt="" />
      </div>
      <div class="tel">
        手机号：<input type="text"  v-model="user.phone" />
      </div>
      <div class="tel">
        昵称:<input type="text"  v-model="user.nickname" />
      </div>
      <div class="pass">
        密码:<input type="text"  v-model="user.password" />
      </div>
      <button class="btn" @click='register'>注册</button>
    </div>
    </div>
</template>

<script>
import vNavgo from '../../components/vNavgo'
import axios from 'axios'
export default {
    components:{
        vNavgo
    },
    data() {
        return {
            user:{
                phone:'1',
                nickname:'1',
                password:'1'
            }
        };
    },
    created() {

    },
    mounted() {

    },
    
    methods: {
        register(){
             if(this.user.phone === '' || this.user.nickname === '' || this.user.password  ===''){
                    alert('用户名密码手机号不能为空')
                    return
                }
            axios({
                url:'/api/register',
                method:'post',
                data:this.user
            }).then(res=>{
               alert(res.data.msg)
               if(res.data.code == 200){
               
                   this.$router.replace('/login')
               }
            } )
        }
    }
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
