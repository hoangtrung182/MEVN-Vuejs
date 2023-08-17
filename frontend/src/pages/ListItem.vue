<template>
    <div class="container">
        <table class="table">
            <thead>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product._id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.image }}</td>
                    <td>
                        <button @click="deleteItem(product._id)">Delete</button>
                        <button><a href="">Update</a></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import { ref, onBeforeMount } from 'vue';
    import axios from 'axios';

    const products = ref([]);

    onBeforeMount(() => {
      const getData = async () => {
        try {
          const res = await axios.get('http://localhost:8000/products');
            products.value = res.data;
        } catch (error) {
          console.log(error)
        }
      }
      getData();
    })

    async function deleteItem(id) {
        try {
            await axios.delete(`http://localhost:8000/products/${id}`);
            const itemFilterd = () => products.value.filter(product => product._id !== id);
            products.value = itemFilterd(); 
            alert("Deleted successfully");
        } catch (error) {
            console.log(error);
        }
    }
</script>

<style>

</style>