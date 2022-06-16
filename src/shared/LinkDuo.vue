<script>
import Link from './Link.vue';
import Icon from './Icon.vue';

export default {
    name: 'LinkDuo',
    props: {
        icon: String,
    },
    components: {
        Link,
        Icon,
    },
};
</script>

<template>
    <Link class="link-duo">
        <span class="text"><slot /></span>
        <Icon class="icon" :name="icon" />
    </Link>
</template>

<style lang="scss">
@import '../styles/mixin';

.link-duo {
    .text {
        text-decoration: underline;
        display: none;
    }
    @include on-tablet {
        .text {
            display: inline;
        }
        .icon {
            display: none;
        }
    }
}
</style>
