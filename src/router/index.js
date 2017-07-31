import Vue from 'vue'
import Router from 'vue-router'
import Jiujiu from '@/components/Jiujiu'
import Fenlei from '@/components/Fenlei'
import Main from '@/components/Main'
import Mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/outmai'},
    {path: '*',redirect:'/outmai'},
    {path: '/outmai',name: 'outmai',component: Main},
    {path: '/jiujiu',name: 'jiujiu',component: Jiujiu},
    {path: '/order',name: 'order',component: Fenlei},
    {path: '/mine',name: 'mine',component: Mine},
  ]
})



