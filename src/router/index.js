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
<<<<<<< HEAD
    },
    {
        path:'/detail',
        name:"detail",
        title:'详情',
        component:()=> import ('@/views/detail/detail.vue')
    },
=======
    },{
        path:'/login',
        name:"login",
        component:()=> import ('@/views/logon/index.vue')
    }
>>>>>>> b2066fd687b708ac84a05ac3dcaad9f31d8145c0
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
