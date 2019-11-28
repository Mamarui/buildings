<template>
    <div class="container">
        <van-tabs type="card" color="#1989fa">
            <van-tab title="已支付">
                <PayCard :msg="1"/>
            </van-tab>
            <van-tab title="未支付">
                <PayCard :msg="0"/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<style lang="css" scoped>
    .container .van-tabs{
        margin-top: 1rem;
    }
</style>

<script>
import PayCard from './payCard'
export default {
    components:{
        PayCard
    },
    data() {
        return {
               
        }
    },
}
</script>