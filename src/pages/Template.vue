<script>
import Header from '../components/Header.vue';

export default {
    name: 'Template',
    components: {
        Header,
    },
};
</script>

<template>
    <Header />
    <router-view />
</template>
