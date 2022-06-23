<script>
import AlbumItem from '../components/AlbumItem.vue';
import AlbumItem from '../components/AlbumItem.vue';
import Loading from '../components/Loading.vue';

export default {
    name: 'AlbumList',
    data() {
        return {
            albums: [],
            loading: true,
        };
    },
    created() {
        this.$http
            .get('/albums?full')
            .then(res => {
                this.albums = res.data.albums;
            })
            .finally(() => {
                this.loading = false;
            });
    },
    components: {
        AlbumItem,
        Loading,
    },
};
</script>
<template>
    <Loading v-if="loading" />
    <div v-else class="album-list">
        <AlbumItem v-for="album of albums" :key="album.id" v-bind="album" />
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
