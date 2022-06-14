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
    background: $black;
}
ul {
    list-style: none;
}
</style>
