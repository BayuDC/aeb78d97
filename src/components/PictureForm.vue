<script>
import Input from '../shared/Input.vue';
import Button from '../shared/Button.vue';

export default {
    name: 'PictureForm',
    data() {
        return {
            stay: false,
            errors: {},
            file: '',
            album: '',
            source: '',
        };
    },
    methods: {
        onSubmit() {
            this.errors = {};
            this.$http
                .post('/pictures', {
                    fileUrl: this.file,
                    album: this.album,
                    source: this.source,
                })
                .then(res => {
                    // Do something

                    if (!this.stay) this.$router.push('/pictures');
                })
                .catch(err => {
                    // Do something

                    this.errors = err.response.data.details;
                });
        },
    },
    components: {
        Input,
        Button,
    },
};
</script>

<template>
    <form class="picture-form" @submit.prevent="onSubmit">
        <Input v-model="file" label="File" :required="true" :error="errors.file" />
        <figure></figure>
        <Input v-model="album" label="Album" :required="true" :error="errors.album" class="album" />
        <Input v-model="source" label="Source" :error="errors.source" />

        <div class="buttons">
            <Button @click="() => (stay = false)" class="dark">Save</Button>
            <Button @click="() => (stay = true)" class="light">Save and Stay Here</Button>
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
