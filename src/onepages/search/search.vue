<template>
    <div>
        <v-navgo></v-navgo>
        
        <div class="search">
            <input type="text" name="" id="" placeholder="请输入内容" v-model='inp' @keyup.enter="add">
        </div>
        <v-yes :list=list  v-if='inp.length>0?inp.length>0:"" '></v-yes>
        <v-no v-else></v-no>
    </div>
</template>

<script>
import vNavgo from '../../components/vNavgo'
import vYes from './yes'
import vNo from './no'
import {reqsearch} from '../../request'
export default {
    components:{
        vNavgo,
        vNo,
        vYes
    
    },
    data() {
        return {
            inp:'',
            list:[]
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        add(){
            // console.log(1);
            reqsearch(this.inp).then(res=>{
                console.log(res);
                this.list = res.data.list
                console.log(this.list);
            })
        }
    }
};
</script>

<style scoped >
.search{
    width: 100vw;
    height: .8rem;
    background-color:#ff6041;
    text-align: center;
    line-height: .8rem;
}
.search input {
    background-color: #fff;
    border-radius: 0.06rem;
    width: 80%;
    height: .5rem;


    
}
</style>
