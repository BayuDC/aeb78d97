import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import axios from './axios';
import App from './App.vue';

const app = createApp(App);

app.config.globalProperties.$http = axios;

app.use(router);
app.use(createPinia());

app.mount(document.getElementById('app'));
