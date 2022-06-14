<script>
export default {
    name: 'Icon',
    props: {
        name: { type: String, required: true },
    },
};
</script>

<template>
    <span class="material-symbols-outlined">{{ name }}</span>
</template>

<style>
span.material-symbols-outlined {
    height: 36px;
    width: 36px;
    display: block;
    font-size: 36px;
    font-weight: 700;
}
</style>
