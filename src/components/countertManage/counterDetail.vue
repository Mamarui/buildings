<template>
    <div class="container">
        <van-nav-bar :title="$route.query.index" left-arrow @click-left="onClickLeft"></van-nav-bar>
        <van-cell-group class="cellGroup">
            <van-cell title="货机名" is-link :value="info.name" />
            <van-cell title="管理员" is-link :value="info.manager" />
            <van-cell title="机身条码" :value="info.code" />
            <van-cell title="货机型号" :value="info.type" />
        </van-cell-group>
        <van-tabbar v-model="active" @change="changeTabs">
            <van-tabbar-item name="unbind">解绑货机</van-tabbar-item>
            <van-tabbar-item name="supply">一键补货</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style lang="css" scoped>
    .container{
        text-align: left;
    }
</style>

<script>
export default {
    data() {
        return {
            active:'',
            info:{
                name:'23楼201',
                manager:'张三',
                code:'1213212165415',
                type:'1456416546111'
            }
        }
    },
    methods:{
        onClickLeft(){
            this.$router.push('/');
        },
        changeTabs(){
            if(this.active == 'unbind'){
                this.$router.push({ name : 'counterBind' , query : { index : this.$route.query.index }});
            }else{
                this.$router.push({ name : 'counterSupply' , query : { index : this.$route.query.index } });
            }
        }
    }
}
</script>