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
    padding: 10px;
    font-weight: 500;
    color: $blue;
    border: $blue 1px solid;

    &.error {
        color: $red;
        border-color: $red;
    }
    &.success {
        color: $green;
        border-color: $green;
    }
}
</style>
