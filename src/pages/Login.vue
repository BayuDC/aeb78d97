<script>
import Header from '../components/Header.vue';
import Button from '../shared/Button.vue';
import Input from '../shared/Input.vue';

export default {
    name: 'Login',
    components: {
        Header,
        Button,
        Input,
    },
};
</script>

<template>
    <Header />
    <div class="container">
        <form class="login-form">
            <h1>Log In to Waifuseum</h1>
            <Input label="Email" :required="true" />
            <Input label="Password" :required="true" />
            <Button class="dark">Log In</Button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/variable';

.container {
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-form {
    background: $yellow;
    padding: 30px 20px;
    width: 100%;
    max-width: 400px;

    h1 {
        text-align: center;
        font-family: $poppins;
        font-size: 24px;
        margin-bottom: 30px;
    }

    button {
        margin-top: 10px;
        width: 100%;
    }
}
</style>
