<template>
  <div class="navbar">
        <div class="menu-left">
            <router-link to="/">HomePage</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <div class="menu-right">
            <!-- <router-link>Login</router-link> -->
            <!-- <router-link>Form</router-link> -->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
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