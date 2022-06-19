<script>
import Header from '../components/Header.vue';
import Link from '../shared/Link.vue';

export default {
    name: 'Landing',
    components: {
        Header,
        Link,
    },
};
</script>

<template>
    <div class="landing">
        <Header class="thick transparent" />
        <main>
            <h1>The Museum of All Waifus</h1>
            <Link to="/home" type="button">Go Explore</Link>
        </main>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/mixin';
@import '../styles/variable';
.landing {
    height: 100vh;
    position: relative;
    background: $black;

    &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-size: cover;
        background-position: center;
        background-image: url('../assets/background.webp');
        opacity: 0.25;
    }

    main {
        position: relative;
        height: calc(100% - 80px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: $white;
        z-index: 1;

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
}
</style>
