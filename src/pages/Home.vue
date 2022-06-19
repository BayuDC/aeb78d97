<script>
import ContentHead from '../components/ContentHead.vue';
import ContentBody from '../components/ContentBody.vue';

import ComingSoon from '../components/ComingSoon.vue';

export default {
    name: 'Home',
    components: {
        ContentHead,
        ContentBody,
        ComingSoon,
    },
};
</script>

ContentBody
<template>
    <ContentHead title="Home" />
    <ContentBody>
        <ComingSoon />
    </ContentBody>
</template>
