<template>
    <div class="container">
        <h1 class="text-center mb-3">ADD PRODUCTS</h1>
        <form @submit.prevent="onHandleSubmit">
            <div class="row">
                <div class="mb-3 col-12 form-group">
                    <label class="form-label">Name</label> 
                    <input type="text" class="form-control" v-model="newItem.name" />
                </div>
                <div class="mb-3 col-12 form-group">
                    <label class="form-label">Price</label>
                    <input type="text" class="form-control" v-model="newItem.price"/>
                </div>
                <div class="mb-3 col-12 form-group">
                    <label class="form-label">Description</label>
                    <textarea class="form-control" v-model="newItem.description"></textarea>
                </div>
                <div class="mb-3 col-12 form-group">
                    <label class="form-label">Image</label>
                    <input type="text" class="form-control" v-model="newItem.image"/>
                </div>
                <div class="form-group text-center">
                    <button type="submit" class="btn btn-primary" style="width: 80px;">Add</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios';

    const router = useRouter();
    const newItem = reactive({
        name: '',
        price: '',
        description: '',
        image: ''
    });
    console.log(newItem);
    async function onHandleSubmit() {
        try {
            await axios.post("http://localhost:8000/products/create", newItem);
            router.push("/admin/products");
        } catch (error) {
            console.log(error);
        }
    }
    
</script>

<style>

</style>