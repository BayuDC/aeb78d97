<script>
import ContentHead from '../components/ContentHead.vue';
import ContentBody from '../components/ContentBody.vue';
import PictureForm from '../components/PictureForm.vue';

export default {
    name: 'PictureNew',
    components: {
        ContentHead,
        ContentBody,
        PictureForm,
    },
};
</script>

<template>
    <ContentHead title="Upload Picture" />
    <ContentBody>
        <PictureForm />
    </ContentBody>
</template>
