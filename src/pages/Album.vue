<script setup>
import ContentHead from '../components/ContentHead.vue';
import ContentBody from '../components/ContentBody.vue';

import AlbumItem from '../components/AlbumItem.vue';
import LinkDuo from '../shared/LinkDuo.vue';
</script>

<script>
export default {
    name: 'Album',
    components: {
        ContentHead,
        ContentBody,
        AlbumItem,
        LinkDuo,
    },
};
</script>

<template>
    <ContentHead title="Albums">
        <LinkDuo to="/albums/new" icon="add">Create Album+</LinkDuo>
    </ContentHead>
    <ContentBody>
        <div class="album-list">
            <AlbumItem name="Hololive" createdBy="Anonymous" createdAt="12/12/2020" :community="true" />
            <AlbumItem
                name="Genshin Impact is Full of Kawaii Waifu and It's Make me Horny as Fuck"
                createdBy="Anonymous"
                createdAt="12/12/2020"
                :community="false"
            />
        </div>
    </ContentBody>
</template>

<style lang="scss" scoped>
@import '../styles/mixin';
@import '../styles/variable';

.album-list {
    display: grid;
    grid-gap: 30px;

    @include on-desktop {
        grid-template-columns: repeat(2, 2fr);
    }
}
</style>
