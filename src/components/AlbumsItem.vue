<script setup>
import { defineComponent, defineProps } from 'vue';

defineProps({
    name: String,
    user: String,
    slug: String,
    date: String,
    community: Boolean,
});

</script>

<template>
    <!--  -->
</template>

<script>
export default defineComponent({
    name: 'AlbumsItem',
});
</script>

<style lang='scss'>
@import '../styles/mixin';
@import '../styles/variable';
</style>