import VueRouter from 'vue-router'

import CounterBind from './components/countertManage/counterBind.vue'
import CounterDetail from './components/countertManage/counterDetail.vue'
import CounterSupply from './components/countertManage/counterSupply.vue'
import Index from './index'

const routes = [
    { path : '/' , component : Index , name : 'index'},
    { path : '/counterBind' , component : CounterBind , name : 'counterBind' },
    { path : '/counterDetail' , component : CounterDetail , name : 'counterDetail' },
    { path : '/counterSupply' , component : CounterSupply , name : 'counterSupply' },
  ]
  
const router = new VueRouter({
    routes
})

export default router