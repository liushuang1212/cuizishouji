import Vue from 'vue'
import Router from 'vue-router'
import goodList from '@/views/goodList.vue'
import whichOne from '@/views/whichOne.vue'
import cart from "@/views/cart.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goodList',
      component: goodList
    },{
      path:'/item/:id',
      name: 'whichOne',
      component: whichOne,
      props: true
    },{
      path:'/cart',
      name:'cart',
      component: cart
    }
  ]
})
