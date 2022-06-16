import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Landing from './pages/Landing.vue';
import Template from './pages/Template.vue';
import Login from './pages/Login.vue';

import Albums from './pages/Album.vue';
import PictureMain from './pages/PictureMain.vue';
import PictureNew from './pages/PictureNew.vue';

const routes = [
    {
        path: '/',
        component: Landing,
    },
    {
        path: '/',
        component: Template,
        children: [
            {
                path: '/home',
                component: Home,
            },
            {
                path: '/albums',
                component: Albums,
            },
            {
                path: '/pictures/new',
                component: PictureNew,
            },
            {
                path: '/pictures',
                component: PictureMain,
            },
        ],
    },
    {
        path: '/login',
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
