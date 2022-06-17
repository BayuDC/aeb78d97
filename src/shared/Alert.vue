<script>
export default {
    name: 'Alert',
};
</script>

<template>
    <div class="alert">
        <slot />
    </div>
</template>

<style lang="scss">
@import '../styles/variable';

.alert {
    text-align: center;
    padding: 10px 0;
    color: $black;
    font-weight: 500;

    &.error {
        color: $red;
    }
}
</style>
