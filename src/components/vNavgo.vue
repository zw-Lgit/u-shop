<template>
    <div class="nav">
        
        <div class="left" @click='goback'>&lt;</div>
        <h3>{{$route.meta.title}}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    
    created() {

    },
    mounted() {
        
    },
    methods: {
        goback(){
           this.$router.go(-1)
        }
    }
};
</script>

<style scoped >
    .nav{
        width: 100%;
        height: 1rem;
        background-color: #ff6041;
    }
    h3{
        font-size: 0.36rem;
        color: #fff;
        margin: auto;
        height: 1rem;
        line-height: 1rem;
        text-align: center;

    }
    .left{
        font-size: .6rem;
        color: #fff;
        position: absolute;
        left: .2rem;
        top: .2rem;
    }
</style>
