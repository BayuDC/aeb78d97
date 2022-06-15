<script>
export default {
    name: 'Button',
};
</script>

<template>
    <button>
        <slot />
    </button>
</template>

<style lang="scss">
@import '../styles/variable';

button {
    cursor: pointer;
    color: $white;
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 700;
    font-family: $fira-sans;
    padding: 10px 20px;
    display: inline-block;

    &.clear {
        padding: 0;
    }

    &.light {
        background: $yellow;
        color: $black;
    }
    &.dark {
        background: $black;
        color: $white;
    }
}
</style>
