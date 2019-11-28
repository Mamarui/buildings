<template>
    <div class="container">
        <van-nav-bar title="绑定货机" left-arrow @click-left="onClickLeft"></van-nav-bar>
        <van-cell-group class="cellGroup">
            <van-cell title="货机名" is-link :value="info.name" />
            <van-cell title="管理员" is-link :value="info.manager" />
            <van-cell title="机身条码" :value="info.code" />
            <van-cell title="货机型号" :value="info.type" />
        </van-cell-group>
        <van-button plain type="info" class="btn" @click="bindUnbind">绑定/解绑</van-button>
    </div>
</template>

<style lang="css" scoped>
    .container .cellGroup{
        text-align: left;
    }
    .container .btn{
        margin: 1rem 0;
    }
</style>

<script>
export default {
    data() {
        return {
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
        bindUnbind(){
            this.$router.push('/');
        }
    }
}
</script>