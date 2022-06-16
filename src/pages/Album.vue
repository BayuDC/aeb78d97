<script setup>
import ContentHead from '../components/ContentHead.vue';
import ContentBody from '../components/ContentBody.vue';

import AlbumItem from '../components/AlbumItem.vue';
import AlbumList from '../components/AlbumList.vue';
import LinkDuo from '../shared/LinkDuo.vue';
</script>

<script>
export default {
    name: 'Album',
    components: {
        ContentHead,
        ContentBody,
        AlbumItem,
        AlbumList,
        LinkDuo,
    },
};
</script>

<template>
    <ContentHead title="Albums">
        <LinkDuo to="/albums/new" icon="add">Create Album+</LinkDuo>
    </ContentHead>
    <ContentBody>
        <AlbumList>
            <AlbumItem name="Hololive" createdBy="Anonymous" createdAt="12/12/2020" :community="true" />
            <AlbumItem
                name="Genshin Impact is Full of Kawaii Waifu and It's Make Me Horny as Fuck"
                createdBy="Anonymous"
                createdAt="12/12/2020"
                :community="false"
            />
        </AlbumList>
    </ContentBody>
</template>
