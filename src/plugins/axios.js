import axios from '../core/axios';

export default {
    /** @param {import('vue').App} app */
    install(app) {
        app.config.globalProperties.$http = axios;
    },
};
