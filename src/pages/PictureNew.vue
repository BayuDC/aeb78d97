<script>
import Input from '../shared/Input.vue';

export default {
    name: 'PictureNew',
    components: {
        Input,
    },
};
</script>

<template>
    <h1>Upload Picture</h1>
    <form>
        <Input label="File" :required="true" error="File is to large" />
        <Input label="Album" :required="true" />
        <Input label="Source" />
    </form>
</template>

<style lang="scss"></style>
