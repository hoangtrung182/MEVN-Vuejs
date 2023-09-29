<template>
    <div class="container">
        <h1 class="text-center mb-3">Sign Up</h1>
        <form @submit.prevent="onHandleSubmit">
            <div class="row">
                <div class="mb-3 col-12 form-group">
                    <label class="form-label">Full name</label> 
                    <input type="text" class="form-control" v-model="newUser.fullname" />
                </div>
                <div class="mb-3 col-12 form-group">
                    <label class="form-label">email</label>
                    <input type="email" class="form-control" v-model="newUser.email"/>
                </div>
                <div class="mb-3 col-12 form-group">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="newUser.password">
                </div>
                <div class="mb-3 col-12 form-group">
                    <label class="form-label">Confirm password</label>
                    <input type="password" class="form-control" v-model="newUser.confirmPassword"/>
                </div>
                <div class="form-group text-center">
                    <Button label="Sign Up" />
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import Button from '../components/Button.vue';
    import axios from 'axios';

    const router = useRouter();
    const newUser = reactive({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    async function onHandleSubmit() {
        try {
            await axios.post("http://localhost:8000/auth/register", newUser);
            router.push("/products");
        } catch (error) {
            console.log(error);
        }
    }
    
</script>

<style>

</style>