<template>
    <div class="container">
        <p class="title">当前货机数：{{count}}</p>
        <div class="productBox">
            <div v-for="(item,index) in product" :key="index" class="product" @click="goInfo(index)">
                <van-icon name="arrow" class="arrow"/>
                <van-tag mark type="success" v-if="item.state=='正常'" class="tag_normal">正常</van-tag>
                <van-card :tag="item.state=='缺货'?'缺货':''" :title="item.type" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
                    <div slot="desc">
                        <div class="van-ellipsis">货机编码 ： {{item.code}}</div>
                        <div class="van-ellipsis">管理员 ： {{item.manager}}</div>
                    </div>
                    <div slot="tags" style="margin-top:0.5rem;">
                        <p><b style="margin-right:0.5rem;"><i style="font-size:1rem;color:red;margin-right:0.5rem;">{{item.onsale}}</i>/</b>{{item.total}}</p>
                        <p>在售/容量</p>
                    </div>
                    <div slot="footer">
                        <p class="footer">{{item.station}}</p>
                    </div>
                </van-card>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    p{
        margin: 0;
    }
    .container{
        background-color: #f1f1f1;
        overflow: hidden;
    }
    .container .title{
        font-size: 14px;
        color: #888;
        line-height: 37px;
        margin-left: 1.3rem;
    }
    .container .productBox{
        overflow: auto;
    }
    .container .productBox .product{
        margin-bottom: 1rem;
        position: relative;
    }
    .container .productBox .product:last-child{
        margin-bottom: 4rem;
    }
    .container .productBox .product .arrow{
        position: absolute;
        right: 0.7rem;
        top: 1rem;
        z-index: 999;
    }
    .container .productBox .product .tag_normal{
        position: absolute;
        left: 1.15rem;
        top: 0.7rem;
        z-index: 999;
    }
    .container .productBox .product .van-card{
        font-size: 12px;
        color: #666;
    }
    .container .productBox .product .van-card .footer{
        font-size: 14px;
    }
</style>

<script>
export default {
    data() {
        return {
            count:0,
            product:[
                {
                    state:'正常',
                    type:'货机型号',
                    code:'货机编码',
                    manager:'张三李四',
                    onsale:3,
                    total:10,
                    station:'23楼102'
                },
                {
                    state:'正常',
                    type:'货机型号',
                    code:'货机编码',
                    manager:'张三李四',
                    onsale:3,
                    total:10,
                    station:'23楼102'
                },
                {
                    state:'正常',
                    type:'货机型号',
                    code:'货机编码',
                    manager:'张三李四',
                    onsale:3,
                    total:10,
                    station:'23楼102'
                },
                {
                    state:'缺货',
                    type:'货机型号',
                    code:'货机编码',
                    manager:'张三李四',
                    onsale:3,
                    total:10,
                    station:'23楼102'
                },
                {
                    state:'正常',
                    type:'货机型号',
                    code:'货机编码',
                    manager:'张三李四',
                    onsale:3,
                    total:10,
                    station:'23楼102'
                },
                {
                    state:'缺货',
                    type:'货机型号',
                    code:'货机编码',
                    manager:'张三李四',
                    onsale:3,
                    total:10,
                    station:'23楼102'
                },
                {
                    state:'缺货',
                    type:'货机型号',
                    code:'货机编码',
                    manager:'张三李四',
                    onsale:3,
                    total:10,
                    station:'23楼102'
                },
                {
                    state:'缺货',
                    type:'货机型号',
                    code:'货机编码',
                    manager:'张三李四',
                    onsale:3,
                    total:10,
                    station:'23楼102'
                },
                {
                    state:'缺货',
                    type:'货机型号',
                    code:'货机编码',
                    manager:'张三李四',
                    onsale:3,
                    total:10,
                    station:'23楼102'
                },
                {
                    state:'缺货',
                    type:'货机型号',
                    code:'货机编码',
                    manager:'张三李四',
                    onsale:3,
                    total:10,
                    station:'23楼102'
                },
            ]
        }
    },
    methods:{
        goInfo(index){
            this.$router.push({ name : 'counterDetail' ,query : { index : index }});
        },
    }
}
</script>