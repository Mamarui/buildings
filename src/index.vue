<template>
    <div class="container">
        <van-nav-bar :title="curTitle" left-arrow @click-left="onClickLeft"></van-nav-bar>
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
import requestData from './requestMethod.js'
import utils from './keyUtils'


export default {
    components:{
        CounterManage,
        OrderManage,
    },
    data() {
        return {
            active:'counterManage',
            curTitle:'货机管理',
        }
    },
    created(){
		//解析参数
		let code = utils.getUrlKey('code')
		let state = utils.getUrlKey('state')
        requestData('/api/oauth/mp/authorize',{
            state:state,
            code:code
        },'get').then((res)=>{
            if(res.status==200){
                sessionStorage.setItem('user_id',res.data.user_id);
                if(res.data.hasbind){
                    sessionStorage.setItem('avatar',res.data.avatar);
                    sessionStorage.setItem('name',res.data.name);
                    sessionStorage.setItem('openid',res.data.openid);
                    sessionStorage.setItem('role',res.data.role);
                    sessionStorage.setItem('phone',res.data.phone);
                    sessionStorage.setItem('merchant',res.data.merchant);
                    sessionStorage.setItem('merchant_name',res.data.merchant_name);
                }else{
                    this.$router.push({ name:'login', query:{ user_id:res.data.user_id } });
                }
            }
        },(err)=>{
            alert(err)
        })
    },
    methods:{
        changeTabs(){
            switch (this.active) {
                case 'counterManage':
                    this.curTitle = '货机管理';
                    break;
                case 'orderManage':
                    this.curTitle = '订单管理';
                    break;
                default:
                    break;
            }
        },
        onClickLeft(){
            this.$router.go(-1);
        },
    }
}
</script>