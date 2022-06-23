import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Landing from '../pages/Landing.vue';
import Template from '../pages/Template.vue';

import AlbumMain from '../pages/AlbumMain.vue';
import PictureMain from '../pages/PictureMain.vue';
import PictureNew from '../pages/PictureNew.vue';

const routes = [
    { path: '/', component: Landing },
    {
        path: '/',
        component: Template,
        children: [
            { path: '/home', component: Home },
            { path: '/albums', component: AlbumMain },
            { path: '/pictures', component: PictureMain },
            {
                path: '/pictures/new',
                component: PictureNew,
                meta: { auth: true },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
