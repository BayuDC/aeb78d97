<script setup>
import AlbumItem from '../components/AlbumItem';
import Icon from '../shared/Icon';
import Link from '../shared/Link';
</script>

<script>
export default {
    name: 'Albums',
    components: { AlbumItem, Link, Icon },
};
</script>

<template>
    <div class="flex album-header">
        <h1>Albums</h1>

        <Link to="/albums/new" class="ml-auto text-black">
        <div class="link">Create Album+</div>
        <Icon class="icon" name="add" />
        </Link>
    </div>
    <div class="album-list">
        <AlbumItem v-for='Album in Albums' class='light flex' :id='Albums.id' :author='Album.author' :name='Album.name'
            :slug='Album.slug' :date='Album.date' :community='Album.community' />
    </div>
</template>

<style lang='scss' scoped>
@import '../styles/mixin';
@import '../styles/variable';
@import '../main.scss';

.album-list {
    display: grid;
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 1rem;

    @include on-desktop {
        grid-template-columns: repeat(2, 2fr);
    }
}

.album-header {
    margin-bottom: 30px;
    align-items: center;

    h1 {
        margin-bottom: 0;
    }

    .link {
        display: none;
        text-decoration: underline;
    }

    @include on-tablet {
        .icon {
            display: none;
        }

        .link {
            display: block;
        }
    }
}
</style>
