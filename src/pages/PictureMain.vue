<script>
import ContentHead from '../components/ContentHead.vue';
import ContentBody from '../components/ContentBody.vue';
import ComingSoon from '../components/ComingSoon.vue';

export default {
    name: 'PictureMain',
    components: {
        ContentHead,
        ContentBody,
        ComingSoon,
    },
};
</script>

<template>
    <ContentHead title="Pictures">
        <!-- <LinkDuo to="/pictures/new" icon="add">Upload Pictures+</LinkDuo> -->
    </ContentHead>
    <ContentBody>
        <ComingSoon />
    </ContentBody>
</template>
