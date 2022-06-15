<script>
import ContentHead from '../components/ContentHead.vue';
import ContentBody from '../components/ContentBody.vue';

import Link from '../shared/Link.vue';
import Icon from '../shared/Icon.vue';

export default {
    name: 'PictureMain',
    components: {
        ContentHead,
        ContentBody,
        Link,
        Icon,
    },
};
</script>

<template>
    <ContentHead title="Pictures">
        <Link to="/pictures/new" class="link">Upload Picture+</Link>
    </ContentHead>
    <ContentBody>
        <h1>Coming Soon</h1>
    </ContentBody>
</template>

<style lang="scss" scoped></style>
