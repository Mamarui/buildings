import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)
// 按需引入
/**将所有需要用到的组件都在这里引用并Vue.use 在页面中即可直接用标签 */
import { 
    Button,
    Tabbar, TabbarItem,
    NavBar,
    Card,
    Tag,
    Cell, CellGroup,
    Icon,
    Tab, Tabs,
    SwipeCell,
    Dialog ,
    Toast ,
    Loading ,
    Picker ,
    Popup ,
    Field ,

} from 'vant';



Vue.use(Button);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(NavBar);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Cell).use(CellGroup);
Vue.use(Icon);
Vue.use(Tab).use(Tabs);
Vue.use(SwipeCell);
Vue.use(Dialog);
Vue.use(Toast);
Vue.use(Loading);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Field);

Vue.config.productionTip = false


var Vues = new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
  
  export default Vues
