import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import {userInfo} from '@/service/api';

import  Store  from '@/store'


import Home from '@/views/home/Home.vue'
const a=[
    {
        path:'/car',
        name:"car",
        component:()=> import ('@/views/car/car.vue')
    },
    {
        path:'/detail',
        name:"detail",
        title:'详情',
        component:()=> import ('@/views/detail/detail.vue')
    },
]
const router = new Router({
    mode:"history",
    routes:[
        {
            path:'/',
            name:"Home",
            component:Home
        },
        ...a
    ]
});



export default router;
