<script setup>
import ContentHead from '../components/ContentHead.vue';
import ContentBody from '../components/ContentBody.vue';

import AlbumItem from '../components/AlbumItem';
import Icon from '../shared/Icon';
import Link from '../shared/Link';
</script>

<script>
export default {
    name: 'Albums',
    components: { ContentHead, ContentBody, AlbumItem, Link, Icon },
};
</script>

<template>
    <ContentHead title="Albums">
        <Link to="/albums/new">Create Album+</Link>
    </ContentHead>
    <ContentBody>
        <div class="album-list">
            <AlbumItem
                v-for="Album in Albums"
                class="light flex"
                :id="Albums.id"
                :author="Album.author"
                :name="Album.name"
                :slug="Album.slug"
                :date="Album.date"
                :community="Album.community"
            />
        </div>
    </ContentBody>
</template>

<style lang="scss" scoped>
@import '../styles/mixin';
@import '../styles/variable';

.album-list {
    display: grid;
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 1rem;

    @include on-desktop {
        grid-template-columns: repeat(2, 2fr);
    }
}
</style>
