<script>
export default {
    name: 'Link',
    props: {
        to: { type: String, default: '#' },
        type: { type: String },
    },
};
</script>

<template>
    <router-link :to="to" :class="{ button: type == 'button' }">
        <slot />
    </router-link>
</template>

<style lang="scss">
@import '../styles/variable';

a {
    text-decoration: none;
    color: $white;
    font-size: 16px;
    font-weight: 700;

    &.button {
        background: $yellow;
        padding: 10px 20px;
        color: $black;
        display: inline-block;
    }
}
</style>
