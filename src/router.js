import { createRouter, createWebHistory } from 'vue-router';
import useAuth from './stores/auth';

import Home from './pages/Home.vue';
import Landing from './pages/Landing.vue';
import Template from './pages/Template.vue';
import Login from './pages/Login.vue';

import Albums from './pages/Album.vue';
import PictureMain from './pages/PictureMain.vue';
import PictureNew from './pages/PictureNew.vue';

const routes = [
    { path: '/', component: Landing },
    {
        path: '/',
        component: Template,
        children: [
            { path: '/home', component: Home },
            { path: '/albums', component: Albums },
            { path: '/pictures', component: PictureMain },
            {
                path: '/pictures/new',
                component: PictureNew,
                meta: { auth: true },
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

router.beforeEach((to, from) => {
    const auth = useAuth();

    if (to.meta.auth && !auth.user) {
        return { path: '/login' };
    }

    return true;
});

export default router;
