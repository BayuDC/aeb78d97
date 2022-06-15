<script setup>
import { defineComponent, defineProps } from 'vue';
import Link from '../shared/Link';
import Button from '../shared/Button';

defineProps({
    name: String,
    author: String,
    slug: String,
    date: String,
    community: Boolean,
});

</script>

<template>
    <div class="album-item">
        <div class="flex flex-col justify-content-between p-4 w-100">
            <div class="flex align-item-center">
                <Link to='/' class='text-black align-self-center'>
                <h2 class='flex align-item-center'>
                    # {{ name }}
                    <Button class='dark community mx-2' v-if='community'>Community</Button>
                </h2>
                </Link>
                <h2 class='ml-auto'>(69)</h2>
            </div>
            <div class='flex'>
                <div class="flex">
                    <span class='mr-1'>
                        Created by
                    </span>
                    <Link to="/" class='text-black'> {{ author }} </Link>
                </div>
                <div class='ml-auto'>
                    <span>
                        {{ date }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default defineComponent({
    name: 'AlbumItem',
    components: { Link, Button },
});
</script>

<style lang='scss'>
@import '../styles/variable';
@import '../main.scss';

.album-item {
    background-color: $yellow;
}

.community {
    font-style: italic;
    padding: 0.25rem;
}
</style>