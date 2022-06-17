<script>
export default {
    name: 'Badge',
};
</script>

<template>
    <span class="badge">
        <slot />
    </span>
</template>

<style lang="scss">
@import '../styles/variable';

.badge {
    font-size: 12px;
    font-weight: 700;
    font-style: italic;
    font-family: $fira-sans;
    line-height: 14px;
    padding: 3px 4px;
    color: $white;
    background: $black;
}
</style>
