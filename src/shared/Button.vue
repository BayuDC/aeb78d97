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
}
</style>
