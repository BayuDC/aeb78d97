<script>
import Header from '../components/Header.vue';
import Link from '../shared/Link.vue';

export default {
    name: 'HomePage',
    components: {
        Header,
        Link,
    },
};
</script>

<template>
    <Header />
    <main>
        <h1>The Museum of All Waifus</h1>
        <Link to="/recent" type="button">Go Explore</Link>
    </main>
</template>

<style lang="scss" scoped>
@import '../styles/mixin';
@import '../styles/variable';

main {
    height: calc(100% - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $white;
    @include on-tablet {
        height: calc(100% - 100px);
    }

    h1 {
        margin-bottom: 40px;
        font-family: $poppins;
        font-size: 36px;
        line-height: 40px;
        text-align: center;
        max-width: 280px;

        @include on-tablet {
            font-size: 42px;
            line-height: normal;
            max-width: none;
        }
    }
    a {
        margin-bottom: 100px;
    }
}
</style>
