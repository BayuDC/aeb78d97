<script>
export default {
    name: 'Loading',
};
</script>

<template>
    <div class="loading">Loading</div>
</template>

<style lang="scss">
@import '../styles/variable';
.loading {
    font-family: $poppins;
    font-size: 36px;
    padding: 20px;

    &::after {
        content: '';
        animation: 1.2s loading infinite;
    }
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
