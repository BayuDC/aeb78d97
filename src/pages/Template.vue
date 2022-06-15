<script>
import Header from '../components/Header.vue';

export default {
    name: 'Template',
    components: {
        Header,
    },
};
</script>

<template>
    <Header />
    <main>
        <div class="container">
            <router-view />
        </div>
    </main>
</template>

<style lang="scss">
@import '../styles/variable';
@import '../styles/mixin';
main {
    .container {
        margin: 30px auto;
        max-width: 1024px;
        padding: 0 20px;

        @include on-tablet {
            padding: 0 30px;
        }
        @include on-desktop {
            padding: 0 40px;
        }
    }
    h1 {
        font-family: $poppins;
        font-size: 24px;
    }
}
</style>
