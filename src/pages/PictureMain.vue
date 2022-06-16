<script>
import ContentHead from '../components/ContentHead.vue';
import ContentBody from '../components/ContentBody.vue';

import LinkDuo from '../shared/LinkDuo.vue';

export default {
    name: 'PictureMain',
    components: {
        ContentHead,
        ContentBody,
        LinkDuo,
    },
};
</script>

<template>
    <ContentHead title="Pictures">
        <LinkDuo to="/pictures/new" icon="add">Upload Pictures+</LinkDuo>
    </ContentHead>
    <ContentBody>
        <h1>Coming Soon</h1>
    </ContentBody>
</template>

<style lang="scss" scoped></style>
