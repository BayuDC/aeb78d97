<script setup>
import { defineComponent } from 'vue';
import AlbumsItem from '../components/AlbumsItem';
import Icon from '../shared/Icon';
import Link from '../shared/Link';
</script>

<template>
    <div class='flex mb-2'>
        <h1 class='align-self-center'>Albums</h1>

        <Link to="/albums" class='ml-auto text-black flex album-header'>

        <p class='align-self-center'>Create Albums</p>
        <Icon class='align-self-center' name='add' />

        </Link>
    </div>
    <div class="album-list">
        <Link to="/" v-for='Album in Albums' type='button'>

        <AlbumsItem :id='Albums.id' :user='Album.user' :name='Album.name' :slug='Album.slug' :date='Album.date'
            :community='Album.community' />

        </Link>
    </div>
</template>

<script>
export default defineComponent({
    name: 'Albums',
    components: { AlbumsItem, Link, Icon },
});
</script>

<style lang='scss'>
@import '../styles/mixin';
@import '../styles/variable';

.flex {
    display: flex;
}

.align-self-center {
    align-self: center;
}

.text-black {
    color: $black;
}

.ml-auto {
    margin-left: auto;
}

.mb-2 {
    margin-bottom: 2rem;
}

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