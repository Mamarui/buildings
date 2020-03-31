<<<<<<< HEAD
<template>
    <div class="container">
        <p class="title">当前货机数：{{count}}</p>
        <div class="productBox">
            <div v-for="(item,index) in product" :key="index" class="product" @click="goInfo(item.id,item.model)">
                <van-icon name="arrow" class="arrow"/>
                <van-tag mark :type="item.dto_status=='正常'?'success':(item.dto_status=='缺货'?'danger':(item.dto_status=='连接断开'?'warning':''))" class="tag_normal">{{item.dto_status}}</van-tag>
                <van-card :tag="item.volume==0?'缺货':''" :title="item.model" :thumb="item.icon==''?'https://img.yzcdn.cn/vant/t-thirt.jpg':item.icon">
                    <div slot="desc">
                        <div class="van-ellipsis">货机编码 ： {{item.surface_no}}</div>
                        <div class="van-ellipsis">管理员 ： {{item.manager}}</div>
                    </div>
                    <div slot="tags" style="margin-top:0.5rem;">
                        <p><b style="margin-right:0.5rem;"><i style="font-size:1rem;color:red;margin-right:0.5rem;">{{item.amount}}</i>/</b>{{item.volume}}</p>
                        <p>在售/容量</p>
                    </div>
                    <div slot="footer">
                        <p class="footer">{{item.name}}</p>
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
        left: 0.5rem;
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
import requestData  from '../../requestMethod';
export default {
    data() {
        return {
            count:0,
            product:[],
            searchForm:{
                merchant:sessionStorage.getItem('merchant'),
                manager:12
            }
        }
    },
    mounted() {
        this.getList();
    },
    methods:{
        getList(){
            requestData('/api/wechat/mmc/container/list',{
                ...this.searchForm
            },'get').then((res)=>{
                if(res.status==200){
                    this.count = res.count;
                    this.product = res.data;
                }
            },(err)=>{
                alert(err)
            })
        },
        goInfo(id,model){
            sessionStorage.setItem('id',id);
            this.$router.push({ name : 'counterDetail' ,query : { id : id , name : model}});
        },
    }
}
=======
<template>
    <div class="container">
        <p class="title">当前货机数：{{count}}</p>
        <div class="productBox">
            <div v-for="(item,index) in product" :key="index" class="product" @click="goInfo(item.id,item.model)">
                <van-icon name="arrow" class="arrow"/>
                <van-tag mark :type="item.dto_status=='正常'?'success':(item.dto_status=='缺货'?'danger':(item.dto_status=='连接断开'?'warning':''))" class="tag_normal">{{item.dto_status}}</van-tag>
                <van-card :tag="item.volume==0?'缺货':''" :title="item.model" :thumb="item.icon==''?'https://img.yzcdn.cn/vant/t-thirt.jpg':item.icon">
                    <div slot="desc">
                        <div class="van-ellipsis">货机编码 ： {{item.surface_no}}</div>
                        <div class="van-ellipsis">管理员 ： {{item.manager}}</div>
                    </div>
                    <div slot="tags" style="margin-top:0.5rem;">
                        <p><b style="margin-right:0.5rem;"><i style="font-size:1rem;color:red;margin-right:0.5rem;">{{item.amount}}</i>/</b>{{item.volume}}</p>
                        <p>在售/容量</p>
                    </div>
                    <div slot="footer">
                        <p class="footer">{{item.name}}</p>
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
        left: 0.5rem;
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
import requestData  from '../../requestMethod';
export default {
    data() {
        return {
            count:0,
            product:[],
            searchForm:{
                merchant:1,
                manager:12
            }
        }
    },
    mounted() {
        this.getList();
    },
    methods:{
        getList(){
            requestData('/api/wechat/mmc/container/list',{
                ...this.searchForm
            },'get').then((res)=>{
                if(res.status==200){
                    this.count = res.count;
                    this.product = res.data;
                }
            },(err)=>{
                alert(err)
            })
        },
        goInfo(id,model){
            sessionStorage.setItem('id',id);
            this.$router.push({ name : 'counterDetail' ,query : { id : id , name : model}});
        },
    }
}
>>>>>>> 69cc1981d4ea4eadc6fc419df2661131cf427890
</script>