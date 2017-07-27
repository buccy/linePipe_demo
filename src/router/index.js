import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import pipeNetMap from '@/components/pipeNetMap'
import Hello from '@/components/Hello'
// import Signin from '@/components/Signin'
// import Signup from '@/components/Signup'
// import Userinfo from '@/components/Userinfo'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Hello,
            children: [{
                    path: '/',
                    name: 'pipeNetMap',
                    component: pipeNetMap
                },
            ]
        },
        // {
        //     path: 'signin',
        //     name: 'Signin',
        //     component: Signin
        // },
        // {
        //     path: 'signup',
        //     name: 'Signup',
        //     component: Signup
        // }
    ]
})