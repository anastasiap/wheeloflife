import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Custom from '../components/Custom.vue';
import Default from '../components/Default.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/custom',
            name: 'custom',
            component: Custom,
        },
        {
            path: '/default',
            name: 'default',
            component: Default,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../components/About.vue'),
        },
    ],
});
