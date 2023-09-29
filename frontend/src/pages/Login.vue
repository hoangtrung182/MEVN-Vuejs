<template>
    <div class="container">
        <h1 class="text-center mb-3">Login</h1>
        <form @submit.prevent="onHandleSubmit">
            <div class="row">
                <div class="mb-3 col-12 form-group">
                    <label class="form-label">email</label>
                    <input type="email" class="form-control" v-model="thisUser.email"/>
                </div>
                <div class="mb-3 col-12 form-group">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="thisUser.password">
                </div>
                <div class="form-group text-center">
                    <Button label="Login" />
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { provide, reactive, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import Button from '../components/Button.vue';
    import { useUserStore } from '../stores/userStore';

    const store = useUserStore();

    const router = useRouter();
    const thisUser = reactive({
        email: '',
        password: '',
    });
    async function onHandleSubmit() {
        try {
            const loginData = store.login(thisUser);
            const { user } = loginData;
            
            if(user.role) {
                store.isLogin = true;
                store.user = user;
                router.push({path: "/admin/products"});
            } else {
                router.push("/products");
            }

        } catch (error) {
            console.log(error);
        }
    }
    
</script>

<style>

</style>