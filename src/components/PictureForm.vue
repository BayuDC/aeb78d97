<script>
import Input from '../shared/Input.vue';
import Button from '../shared/Button.vue';

export default {
    name: 'PictureForm',
    components: {
        Input,
        Button,
    },
};
</script>

<template>
    <form class="picture-form">
        <Input label="File" :required="true" error="File is too large" />
        <figure></figure>
        <Input label="Album" :required="true" class="album" />
        <Input label="Source" />

        <div class="buttons">
            <Button class="dark">Save</Button>
            <Button class="light">Save and Stay Here</Button>
        </div>
    </form>
</template>

<style lang="scss">
@import '../styles/mixin';
.picture-form {
    display: grid;
    grid-template-columns: 1fr;

    @include on-tablet {
        grid-template-columns: 1fr 1fr;
        column-gap: 30px;
        align-items: start;

        .album {
            grid-row: 1;
            grid-column: 2;
        }
        .buttons {
            grid-column: 2;
        }
        figure {
            grid-row: 2 / 5;
        }
    }
    @include on-desktop {
        grid-template-columns: 400px 1fr;
        .album {
            grid-column: 1;
            grid-row: 2;
        }
        .buttons {
            grid-column: 1;
            grid-row: 4;
        }
        figure {
            grid-column: 2;
            grid-row: 1 / 6;
        }
    }

    .buttons {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
}
</style>
