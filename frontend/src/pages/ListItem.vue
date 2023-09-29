<template>
    <div class="container pb-2 rounded">
        <h1 class="text-center mb-3">Table of products</h1>
        <button class="float-end btn btn-light"><a href="/admin/products/add">ADD NEW</a></button>
        <table class="table rounded">
            <thead>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Action</th>
            </thead>
            <tbody>
                    <tr class="w-[100px]" v-for="product in products" :key="product._id">
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td>
                            <img :src="`${product.image}`" />
                        </td>
                        <td>
                            <button class="btn btn-primary" @click="deleteItem(product._id)">Delete</button>
                            <router-link class="btn btn-success" :to="`/admin/products/update/${product._id}`">Update</router-link>
                        </td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { ref, onBeforeMount } from 'vue';
    const products = ref([]);

    onBeforeMount(() => {
        const getData = async () => {
            const res = await axios.get('http://localhost:8000/products');
            products.value = res.data;
        }
        getData();
    });

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