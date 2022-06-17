<script>
import useAuth from '../stores/auth';
import Loading from '../components/Loading.vue';

export default {
    name: 'Logout',
    setup() {
        return {
            auth: useAuth(),
        };
    },
    created() {
        this.$http.post('/auth/logout').finally(() => {
            this.auth.unload();
            this.$router.replace('/');
        });
    },
    components: { Loading },
};
</script>

<template>
    <Loading />
</template>
