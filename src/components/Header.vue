<script>
import Navbar from './Navbar.vue';
import Button from '../shared/Button.vue';
import Icon from '../shared/Icon.vue';

export default {
    name: 'Header',
    components: {
        Navbar,
        Button,
        Icon,
    },
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isActive = !this.isActive;
        },
        closeMenu() {
            this.isActive = false;
        },
    },
};
</script>

<template>
    <header :class="{ active: isActive }">
        <div class="container">
            <router-link to="/">
                <h1>Waifuseum</h1>
            </router-link>
            <Button @click="toggleMenu" class="menu clear">
                <Icon :name="isActive ? 'close' : 'menu'" />
            </Button>
            <Navbar :isActive="isActive" @click="closeMenu" />
        </div>
    </header>
</template>

<style lang="scss">
@import '../styles/mixin';
@import '../styles/variable';

header {
    color: $white;
    padding: 0 20px;
    position: relative;
    background: $black;
    z-index: 10;

    &.transparent {
        background: none;
    }

    &.active {
        background: $black;
    }

    @include on-tablet {
        padding: 0 30px;
        &.active.transparent {
            background: none;
        }
        .menu {
            display: none;
        }
    }
    @include on-desktop {
        padding: 0 40px;
    }

    .container {
        margin: auto;
        max-width: 1024px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &.thick .container {
        @include on-tablet {
            height: 100px;
        }
    }

    h1 {
        font-size: 30px;
        font-style: italic;
        font-weight: 700;
        color: $yellow;
    }
}
</style>
