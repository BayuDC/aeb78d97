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

    // TODO move to separeted file
    section.header {
        margin-bottom: 30px;
        display: flex;
        align-items: center;

        h1 {
            font-family: $poppins;
            font-size: 24px;
        }
        a {
            color: $black;

            .text {
                text-decoration: underline;
                display: none;
            }

            @include on-tablet {
                .icon {
                    display: none;
                }
                .text {
                    display: inline;
                }
            }
        }
    }
}
</style>
