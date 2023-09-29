<template>
  <div class="container-fluid">
      <h1 class="text-center text-3xl my-4">Home page</h1>
      <div class="grid grid-cols-4 gap-4">
        <div class="border-2 rounded-sm text-center p-2" v-for="product in products" :key="product._id">
          <div class="">
            <img :src="`${product.image}`" class="w-[200px] text-center mx-auto" alt="...">
            <div class="card-body">
                <a :href="`/products/${product._id}`">
                  <h5 class="card-title hover:underline">{{ product.name }}</h5>
                </a>
                <p class="text-slate-400">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button label="Add to cart" />
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import { ref, onBeforeMount } from 'vue';
  import Button from '../components/Button.vue';
  import { useUserStore } from '../stores/userStore';
  const products = ref([]);

  // onBeforeMount(() => {
  //     const getData = async () => {
  //         const res = await axios.get('http://localhost:8000/products');
  //         products.value = res.data;
  //         // console.log(products.value);
  //     }
  //     getData();
  // });

  const store = useUserStore();

  const LoginSuccess = ref(true);

  if(LoginSuccess.value) {
    store.Authen.isAuthenticated = true,
    store.Authen.user = { id: 1, name: 'Trung Login'}
  }
  console.log(store.Authen)

</script>

<style>

</style>