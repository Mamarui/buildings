<template>
    <div class="container">
        <van-nav-bar :title="curTitle" :right-text="curRightTxt" left-arrow @click-left="onClickLeft" @click-right="onClickRight"></van-nav-bar>
        <CounterManage v-if="active == 'counterManage'"/>
        <OrderManage v-if="active == 'orderManage'"/>
        <van-tabbar v-model="active" @change="changeTabs">
            <van-tabbar-item name="counterManage" icon="shop-o">货柜管理</van-tabbar-item>
            <van-tabbar-item name="orderManage" icon="balance-list-o">订单管理</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style lang="css" scoped>
    .container{
        text-align: left;
    }
</style>


<script>
import CounterManage from './components/countertManage/counterManage'
import OrderManage from './components/orderManage/orderManage'
export default {
    components:{
        CounterManage,
        OrderManage,
    },
    data() {
        return {
            active:'counterManage',
            curTitle:'货机管理',
            curRightTxt:'绑定新货机',
        }
    },
    methods:{
        changeTabs(){
            switch (this.active) {
                case 'counterManage':
                    this.curTitle = '货机管理';
                    this.curRightTxt = '绑定新货机';
                    break;
                case 'orderManage':
                    this.curTitle = '订单管理';
                    this.curRightTxt = '';
                    break;
                default:
                    break;
            }
        },
        onClickLeft(){
            
        },
        onClickRight(){
            this.$router.push({ name : 'counterBind' })
        }
    }
}
</script>