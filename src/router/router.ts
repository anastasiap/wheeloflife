import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
// import Howto from '../components/Howto.vue'
// import Info from '../components/Info.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            component: Home,
            name: 'home',
            path: '/',
        },
        // {
        //     component: Howto,
        //     name: 'howto',
        //     path: '/howto',
        // },
        // {
        //     component: Info,
        //     name: 'info',
        //     path: '/info',
        // },
        // {
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     // component: () => import(/* webpackChunkName: "about" */ '../components/About.vue'),
        //     // name: 'about',
        //     // path: '/about',
        // },
    ],
})
