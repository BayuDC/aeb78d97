import { defineStore } from 'pinia';
import axios from '../axios';

export default defineStore('auth', {
    state: () => {
        return {
            user: undefined,
            isLoading: true,
        };
    },
    getters: {
        check: state => {
            return state.user != undefined;
        },
    },
    actions: {
        async load() {
            this.isLoading = true;
            try {
                const res = await axios.get('/auth/me');

                this.user = res.data.user;
            } catch {
                this.user = undefined;
            }
            this.isLoading = false;
        },
        unload() {
            this.user = undefined;
        },
    },
});
