<script>
import Input from '../shared/Input.vue';
import Button from '../shared/Button.vue';

export default {
    name: 'PictureNew',
    components: {
        Input,
        Button,
    },
};
</script>

<template>
    <h1>Upload Picture</h1>
    <form>
        <Input label="File" :required="true" error="File is to large" />
        <Input label="Album" :required="true" />
        <Input label="Source" />

        <div class="buttons">
            <Button class="dark">Save</Button>
            <Button class="light">Save and Stay Here</Button>
        </div>
    </form>
</template>

<style lang="scss">
form {
    .buttons {
        margin-top: 20px;
        display: flex;
        gap: 20px;
    }
}
</style>
