<script setup>
import ContentHead from '../components/ContentHead.vue';
import ContentBody from '../components/ContentBody.vue';
import ComingSoon from '../components/ComingSoon.vue';
import LinkDuo from '../shared/LinkDuo.vue';
</script>

<script>
export default {
    name: 'Album',
    components: {
        ContentHead,
        ContentBody,
        ComingSoon,
        LinkDuo,
    },
};
</script>

<template>
    <ContentHead title="Albums">
        <!-- <LinkDuo to="/albums/new" icon="add">Create Album+</LinkDuo> -->
    </ContentHead>
    <ContentBody>
        <ComingSoon />
    </ContentBody>
</template>
