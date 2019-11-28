<template>
    <div class="container">
        <van-nav-bar title="补换货" left-arrow @click-left="onClickLeft"></van-nav-bar>
        <van-cell-group class="cellGroup">
            <van-cell title="货机名" :value="info.name" />
            <van-cell title="位置" :value="info.location" />
            <van-cell title="商品类型" is-link :value="info.product_type" />
            <van-cell title="商品名称" is-link :value="info.product_name" />
            <van-cell title="库存数" :value="info.product_num" />
            <van-cell title="补货量" is-link :value="info.supply_num" />
        </van-cell-group>
        <van-tabbar v-model="active" @change="changeTabs">
            <van-tabbar-item name="cancel">取消</van-tabbar-item>
            <van-tabbar-item name="done">完成</van-tabbar-item>
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
                location:'7',
                product_type:'2313121',
                product_name:'1132123132',
                product_num:'1212121',
                supply_num:'1',
            }
        }
    },
    methods:{
        onClickLeft(){
            this.$router.push({ name : 'counterDetail' });
        },
        changeTabs(){
            if(this.active == 'cancel'){
                alert('取消')
            }else{
                alert('完成')
            }
            this.$router.push({ name : 'counterDetail' });
        }
    }
}
</script>