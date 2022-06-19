<script>
export default { name: 'LoadEffect' };
</script>

<template>
    <span class="load-effect">
        <slot />
    </span>
</template>

<style lang="scss">
.load-effect::after {
    content: '';
    animation: 1.2s loading infinite;
}

@keyframes loading {
    25% {
        content: '';
    }
    50% {
        content: '.';
    }
    75% {
        content: '..';
    }
    100% {
        content: '...';
    }
}
</style>
