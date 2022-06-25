<script>
import Loading from '../components/Loading.vue';
import ContentHead from '../components/ContentHead.vue';

export default {
    name: 'AlbumDetail',
    components: {
        Loading,
        ContentHead,
    },
    data() {
        return {
            loading: true,
            album: {},
        };
    },
    created() {
        const id = this.$route.params.id;

        this.$http
            .get('/albums/' + id)
            .then(res => {
                this.album = res.data.album;
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                this.loading = false;
            });
    },
};
</script>

<template>
    <Loading v-if="loading" />
    <template v-else>
        <ContentHead :title="album.name" />
    </template>
</template>
