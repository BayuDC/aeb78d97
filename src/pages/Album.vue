<script setup>
import { defineComponent } from 'vue';
import AlbumItem from '../components/AlbumItem';
import Icon from '../shared/Icon';
import Link from '../shared/Link';
import Button from '../shared/Button';
</script>

<template>
    <div class='flex mb-4'>
        <h1 class='align-self-center'>Albums</h1>

        <Link to="/albums" class='ml-auto text-black flex album-header'>

        <p class='align-self-center'>Create Albums</p>
        <Icon class='align-self-center' name='add' />

        </Link>
    </div>
    <div class="album-list">
        <AlbumItem v-for='Album in Albums' class='light flex' :id='Albums.id' :author='Album.author' :name='Album.name'
            :slug='Album.slug' :date='Album.date' :community='Album.community' />
    </div>
</template>

<script>
export default defineComponent({
    name: 'Albums',
    components: { AlbumItem, Link, Button, Icon },
});
</script>

<style lang='scss'>
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

    p {
        display: none;
    }

    @include on-tablet {
        p {
            display: block;
        }
    }

    @include on-desktop {
        p {
            display: block;
        }
    }
}
</style>