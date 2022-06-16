<script>
import Link from '../shared/Link.vue';
import Button from '../shared/Button.vue';
import Badge from '../shared/Bagde.vue';

export default {
    name: 'AlbumItem',
    components: {
        Link,
        Button,
        Badge,
    },
    props: {
        name: String,
        createdBy: String,
        createdAt: String,
        community: Boolean,
    },
};
</script>

<template>
    <div class="album-item">
        <div class="flex mb-10">
            <h1 class="name">
                # {{ name }}
                <Badge v-if="community">Community</Badge>
            </h1>
            <div class="count">(69)</div>
        </div>
        <div class="flex mt-auto">
            <div class="author">Anonymous</div>
            <div class="date">22/02/20222</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/variable';
@import '../styles/mixin';
@import '../main';

.album-item {
    padding: 20px;
    background-color: $yellow;
    position: relative;
    display: flex;
    flex-direction: column;

    .badge {
        display: inline-block;
        position: absolute;
        right: 20px;
        bottom: 0;
        transform: translateY(50%);

        @include on-tablet {
            position: static;
            transform: translateY(-3px);
        }
    }

    .name,
    .count {
        font-family: $poppins;
        font-size: 20px;
        line-height: 28px;
    }
    .count {
        margin-left: auto;
    }

    .author,
    .date {
        font-size: 14px;
    }

    .author {
        font-weight: 700;

        &::after {
            content: '·';
            margin: 0 4px;

            @include on-tablet {
                display: none;
            }
        }
        &::before {
            content: 'Created By ';
            font-weight: 400;
            display: none;

            @include on-tablet {
                display: inline;
            }
        }
    }
    .date {
        @include on-tablet {
            margin-left: auto;
        }
    }
}
</style>
