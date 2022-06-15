<script setup>
import { defineComponent, defineProps } from 'vue';

defineProps({
    name: String,
    author: String,
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
    name: 'AlbumItem',
});
</script>

<style lang='scss'>
@import '../styles/mixin';
@import '../styles/variable';
</style>