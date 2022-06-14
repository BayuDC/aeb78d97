<script>
import Link from '../shared/Link.vue';

export default {
    name: 'Navbar',
    props: {
        isActive: { type: Boolean, default: false },
    },
    components: {
        Link,
    },
};
</script>

<template>
    <nav :class="{ active: isActive }">
        <ul>
            <li><Link to="/albums">Albums</Link></li>
            <li><Link to="/pictures">Pictures</Link></li>
            <li><Link to="/login" type="button">Log In</Link></li>
        </ul>
    </nav>
</template>

<style lang="scss">
@import '../styles/mixin';
@import '../styles/variable';

nav {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: calc(100vh - 100%);
    display: none;

    &.active {
        display: block;
        background: $black;
        @include on-tablet {
            background: none;
        }
    }
    @include on-tablet {
        display: block;
        position: static;
        height: auto;
    }

    ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 20px;
        gap: 30px;

        @include on-tablet {
            flex-direction: row;
            align-items: center;
            padding: 0;
            gap: 40px;
        }

        .button {
            display: block;
        }
    }
}
</style>
