<script>
export default { name: 'App' };
</script>

<template>
    <router-view />
</template>

<style lang="scss">
@import './styles/variable';

* {
    margin: 0;
    padding: 0;
}
body {
    font-family: $fira-sans;
    background-size: cover;

    #app {
        height: 100vh;
        background: rgba($color: $black, $alpha: 0.8);
    }
}
ul {
    list-style: none;
}
</style>
