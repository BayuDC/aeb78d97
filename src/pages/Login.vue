<script>
import useAuth from '../stores/auth';

import Header from '../components/Header.vue';
import Button from '../shared/Button.vue';
import Input from '../shared/Input.vue';
import Alert from '../shared/Alert.vue';

export default {
    name: 'Login',
    setup() {
        return { auth: useAuth() };
    },
    data() {
        return {
            email: 'dev.bayudc@gmail.com',
            password: 'Shirayuki39',
            message: '',
            isLoading: false,
        };
    },
    methods: {
        onSubmit(e) {
            if (this.isLoading) return;

            this.message = '';
            this.isLoading = true;

            this.$http
                .post('/auth/login', {
                    email: this.email,
                    password: this.password,
                })
                .then(async res => {
                    await this.auth.load();
                    this.$router.replace('/home');
                })
                .catch(err => {
                    this.message = err.response.data.message;
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
    },
    components: {
        Header,
        Button,
        Input,
        Alert,
    },
};
</script>

<template>
    <Header />
    <div class="container">
        <form class="login-form" @submit.prevent="onSubmit">
            <h1>Log In to Waifuseum</h1>

            <Input v-model.lazy="email" label="Email" :required="true" />
            <Input v-model.lazy="password" label="Password" :required="true" type="password" />

            <Alert v-if="message" class="error">{{ message }}</Alert>
            <Button class="dark">Log In{{ isLoading ? '...' : '' }}</Button>
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
