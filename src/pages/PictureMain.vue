<script>
import Link from '../shared/Link.vue';
import Icon from '../shared/Icon.vue';

export default {
    name: 'PictureMain',
    components: {
        Link,
        Icon,
    },
};
</script>

<template>
    <section class="header">
        <h1>Pictures</h1>
        <Link to="/pictures/new">
            <span class="text">Upload picture+</span>
            <Icon class="icon" name="add" />
        </Link>
    </section>
</template>

<style lang="scss" scoped>
.header {
    a {
        margin-left: auto;
    }
}
</style>
