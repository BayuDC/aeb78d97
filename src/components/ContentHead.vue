<script>
export default {
    name: 'ContentHead',
    props: {
        title: String,
    },
};
</script>

<template>
    <section class="content-head">
        <h1>{{ title }}</h1>
        <slot />
    </section>
</template>

<style lang="scss">
@import '../styles/variable';

section.content-head {
    display: flex;
    margin-bottom: 30px;
    align-items: center;
    gap: 20px;

    h1 {
        font-family: $poppins;
        font-size: 24px;
    }
    a {
        color: $black;
        margin-left: auto;
    }
}
</style>
