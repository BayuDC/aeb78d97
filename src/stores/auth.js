import { defineStore } from 'pinia';
import axios from '../axios';

export default defineStore('auth', {
    state: () => {
        return {
            user: undefined,
        };
    },
    actions: {
        async load() {
            try {
                const res = await axios.get('/auth/me');

                this.user = res.data.user;
            } catch {
                this.user = undefined;
            }
        },
    },
});
