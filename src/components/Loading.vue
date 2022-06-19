<script>
import LoadEffect from '../shared/LoadEffect.vue';

export default {
    name: 'Loading',
    components: {
        LoadEffect,
    },
};
</script>

<template>
    <div class="loading">
        <LoadEffect>Loading</LoadEffect>
    </div>
</template>

<style lang="scss">
@import '../styles/variable';
.loading {
    font-family: $poppins;
    font-size: 36px;
    padding: 20px;
}
</style>
