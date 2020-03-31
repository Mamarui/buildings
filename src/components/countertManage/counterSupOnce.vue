<<<<<<< HEAD
<template>
    <div class="container">
        <van-nav-bar title="一键补货" left-arrow @click-left="onClickLeft"></van-nav-bar>
        <div class="product" v-if="$route.query.list!=[]&&$route.query.list.length!=0">
            <table>
                <thead>
                    <td>位置</td>
                    <td>商品</td>
                    <td>货柜存量</td>
                    <td>库存</td>
                    <td>操作</td>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in $route.query.list" :key="index">
                        <th>{{item.cid}}</th>
                        <th>{{item.goods_name}}</th>
                        <th>{{item.amount}}</th>
                        <th>{{item.inventory}}</th>
                        <th><van-button plain type="danger" class="btn" size="mini" @click="tabToSupply(item.cid)">补货</van-button></th>
                    </tr>
                </tbody>
            </table>
        </div>
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
    .container .product{
        margin-top: 1rem;
    }
    .container .product table{
        width: 22rem;
        margin: 0.5rem auto;
        background-color: #C6D2E3;
        font-size: 14px;
    }
    .container .product table thead{
        background-color: #1B57B1;
    }
    .container .product table thead td{
        color: #fff;
        text-align: center;
    }
    .container .product table tbody tr{
        line-height: 2rem;
        font-weight: normal;
    }
    .container .product table tbody tr th{
        border-bottom: 1px dashed #7792BB;
        text-align: center;
    }
</style>

<script>
export default {
    data() {
        return {
            active:''
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push({ name : 'counterDetail' });
        },
        changeTabs(){
            if(this.active == 'cancel'){
                alert('取消')
                this.$router.push({ name : 'counterDetail' });
            }else{
                alert('完成')
            }
        },
    },
}
=======
<template>
    <div class="container">
        <van-nav-bar title="一键补货" left-arrow @click-left="onClickLeft"></van-nav-bar>
        <div class="product" v-if="$route.query.list!=[]&&$route.query.list.length!=0">
            <table>
                <thead>
                    <td>位置</td>
                    <td>商品</td>
                    <td>货柜存量</td>
                    <td>库存</td>
                    <td>操作</td>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in $route.query.list" :key="index">
                        <th>{{item.cid}}</th>
                        <th>{{item.goods_name}}</th>
                        <th>{{item.amount}}</th>
                        <th>{{item.inventory}}</th>
                        <th><van-button plain type="danger" class="btn" size="mini" @click="tabToSupply(item.cid)">补货</van-button></th>
                    </tr>
                </tbody>
            </table>
        </div>
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
    .container .product{
        margin-top: 1rem;
    }
    .container .product table{
        width: 22rem;
        margin: 0.5rem auto;
        background-color: #C6D2E3;
        font-size: 14px;
    }
    .container .product table thead{
        background-color: #1B57B1;
    }
    .container .product table thead td{
        color: #fff;
        text-align: center;
    }
    .container .product table tbody tr{
        line-height: 2rem;
        font-weight: normal;
    }
    .container .product table tbody tr th{
        border-bottom: 1px dashed #7792BB;
        text-align: center;
    }
</style>

<script>
export default {
    data() {
        return {
            active:''
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push({ name : 'counterDetail' });
        },
        changeTabs(){
            if(this.active == 'cancel'){
                alert('取消')
                this.$router.push({ name : 'counterDetail' });
            }else{
                alert('完成')
            }
        },
    },
}
>>>>>>> 69cc1981d4ea4eadc6fc419df2661131cf427890
</script>