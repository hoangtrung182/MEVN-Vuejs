<template>
    <div class="container">
        <h1 class="text-center mb-3">Update </h1>
        <form @submit.prevent="onHandleSubmit">
            <div class="row">

                <div class="mb-3">
                    <label class="form-label">Name</label> 
                    <input type="text" class="form-control" :value="product.name"
                    @input="event => newItem.name = event.target.value"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Price</label>
                    <input type="text" class="form-control" :value="product.price"
                    @input="event => newItem.price = event.target.value"
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Description</label>
                    <textarea class="form-control" :value="product.description"
                    @input="event => newItem.description = event.target.value"
                    ></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Image</label>
                    <input type="text" class="form-control" :value="product.image" 
                    @input="event => newItem.image = event.target.value"
                    />
                </div>
                <div class="form-group text-center">
                    <Button label="Update" />
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { onBeforeMount, reactive, ref } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import Button from '../components/Button.vue';
    import axios from 'axios';

    const router = useRouter();
    const route = useRoute();

    const product = ref({});
    
    onBeforeMount(() => {
        async function currentProduct() {
            try {
                const res = await axios.get(`http://localhost:8000/products/${route.params.id}`);
                product.value = res.data;
            } catch (error) {
                console.log(error);
            }
        }
        currentProduct();
    })
    const newItem = reactive({
        name: '',
        price: '',
        description: '',
        image: ''
    });
    
   
    async function onHandleSubmit() {
        try {
            await axios.put(`http://localhost:8000/products/${route.params.id}`, newItem);
            router.push("/admin/products");
        } catch (error) {
            console.log(error);
        }
    }
    
</script>

<style>

</style>