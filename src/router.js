import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Landing from './pages/Landing.vue';
import Template from './pages/Template.vue';

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
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
