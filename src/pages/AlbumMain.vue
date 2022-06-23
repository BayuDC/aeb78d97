<script setup>
import ContentHead from '../components/ContentHead.vue';
import ContentBody from '../components/ContentBody.vue';
import AlbumList from '../components/AlbumList.vue';
</script>

<script>
export default {
    name: 'Album',
    components: {
        ContentHead,
        ContentBody,
        AlbumList,
    },
};
</script>

<template>
    <ContentHead title="Albums">
        <!-- <LinkDuo to="/albums/new" icon="add">Create Album+</LinkDuo> -->
    </ContentHead>
    <ContentBody>
        <AlbumList />
    </ContentBody>
</template>
