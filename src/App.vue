<script>
import { mapState } from 'pinia';
import useAuth from './stores/auth';
import Loading from './components/Loading.vue';

export default {
    name: 'App',
    components: { Loading },
    computed: {
        ...mapState(useAuth, ['isLoading']),
    },
};
</script>

<template>
    <Loading />
    <!-- <Loading v-if="isLoading" />
    <router-view v-else /> -->
</template>

<style lang="scss">
@import './styles/variable';
</style>
