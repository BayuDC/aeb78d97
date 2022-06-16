<script>
export default {
    name: 'AlbumList',
};
</script>
<template>
    <div class="album-list">
        <slot />
    </div>
</template>

<style lang="scss">
@import '../styles/mixin';

.album-list {
    display: grid;
    grid-gap: 30px;

    @include on-desktop {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
