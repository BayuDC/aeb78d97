import { createApp } from 'vue';
import { createPinia } from 'pinia';

import axios from './plugins/axios';
import router from './core/router';

import App from './App.vue';

const app = createApp(App);

app.use(axios);
app.use(router);
app.use(createPinia());

app.mount(document.getElementById('app'));
