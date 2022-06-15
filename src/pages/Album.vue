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
        <Link to="/" v-for="Album in Albums" type="button">
            <AlbumItem
                :id="Albums.id"
                :user="Album.user"
                :name="Album.name"
                :slug="Album.slug"
                :date="Album.date"
                :community="Album.community"
            />
        </Link>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/mixin';

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
