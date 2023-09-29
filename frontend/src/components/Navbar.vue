<template>
  <div class="navbar border rounded my-4">
        <div class="menu-left">
            <router-link to="/">HomePage</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/admin/products">Admin</router-link>
        </div>
        <div class="menu-right">
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Sign Up</router-link>
        </div>
    </div>
</template>

<script setup>
    import { useUserStore } from '../stores/userStore';

    const store = useUserStore();
    // console.log(store.isLogin);
</script>

<style>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.menu-left {
    padding-left: 0;
}
a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
    margin-left: 20px;
}
</style>