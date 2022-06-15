import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Landing from './pages/Landing.vue';
import Template from './pages/Template.vue';
import Albums from './pages/Album.vue';

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
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
