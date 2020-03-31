import VueRouter from 'vue-router'


import CounterDetail from './components/countertManage/counterDetail.vue'
import CounterSupply from './components/countertManage/counterSupply.vue'
import CounterSupOnce from './components/countertManage/counterSupOnce.vue'
import Index from './index'
import Login from './login.vue'

const routes = [
    { path : '/' , component : Index , name : 'index'},
    { path : '/login' , component : Login , name : 'login'},
    { path : '/counterDetail' , component : CounterDetail , name : 'counterDetail' },
    { path : '/counterSupply' , component : CounterSupply , name : 'counterSupply' },
    { path : '/counterSupOnce' , component : CounterSupOnce , name : 'counterSupOnce' },
  ]
  
const router = new VueRouter({
    routes
})

export default router