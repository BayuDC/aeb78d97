<script>
import Input from '../shared/Input.vue';
import Button from '../shared/Button.vue';
import Alert from '../shared/Alert.vue';
import LoadEffect from '../shared/LoadEffect.vue';

export default {
    name: 'PictureForm',
    data() {
        return {
            stay: false,
            loading: false,
            errors: {},
            alert: {},
            file: '',
            album: '',
            source: '',
        };
    },
    methods: {
        onSubmit() {
            if (this.loading) return;

            const stay = this.stay;

            this.errors = {};
            this.loading = true;

            this.$http
                .post('/pictures', {
                    fileUrl: this.file,
                    album: this.album,
                    source: this.source,
                })
                .then(res => {
                    this.alert = {
                        type: 'success',
                        message: res.data.message || res.statusText,
                    };

                    if (!stay) this.$router.push('/pictures');
                })
                .catch(err => {
                    const res = err.response;

                    this.alert = {
                        type: 'error',
                        message: res.data.message || res.statusText,
                    };
                    this.errors = res.data.details;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },
    components: {
        Input,
        Button,
        Alert,
        LoadEffect,
    },
};
</script>

<template>
    <form class="picture-form" @submit.prevent="onSubmit">
        <Input v-model="file" label="File" :required="true" :error="errors.file" />
        <figure>
            <!-- <img /> -->
        </figure>
        <Input v-model="album" label="Album" :required="true" :error="errors.album" class="album" />
        <Input v-model="source" label="Source" :error="errors.source" class="source" />

        <Alert v-if="loading"><LoadEffect>Loading</LoadEffect></Alert>
        <Alert v-else-if="alert.message" :class="[alert.type]">{{ alert.message }}</Alert>

        <div class="buttons">
            <Button @click="() => (stay = false)" class="dark">Save</Button>
            <Button @click="() => (stay = true)" class="light">Save and Stay Here</Button>
        </div>
    </form>
</template>

<style lang="scss">
@import '../styles/mixin';
@import '../styles/variable';

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
            grid-row: 2 / 6;
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
            grid-row: 5;
        }
        figure {
            grid-column: 2;
            grid-row: 1 / 7;
        }
    }
    .alert {
        margin-bottom: 20px;
    }
    .buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
    figure img {
        margin-bottom: 20px;
        width: 100%;
        height: 200px;
        background: rgba($color: $blue, $alpha: 0.2);
    }
}
</style>
