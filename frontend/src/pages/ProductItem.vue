<template>
    <div class="container">
        <h1 class="font-bold text-3xl text-center">Product Item</h1>
        <div class="grid grid-cols-2 mt-5">
            <div class="mx-auto">
              <img :src="`${ProductDetail.image}`" style="width: 400px;" alt="...">
            </div>
            <div class="">
                <h3 class="text-3xl font-bold ">{{ ProductDetail.name }}</h3>
                <span>Price: {{ ProductDetail.price }}</span>
                <p>{{ ProductDetail.description }}</p>
            </div>
        </div>
        <div class="mt-10">
            <h4 class="font-bold text-3xl">Comment</h4>
            <form @submit.prevent="onComment" class="relative border">
                <textarea cols="123" class="p-2" placeholder="Enter your comment..." v-model="textComment"></textarea>
                <Button class="absolute right-0 top-0" label="Send" />
            </form>
            <ul class="comment-menu">
                <li v-for="comment in [...listComments].reverse()" :key="comment.id">
                    <div class="my-2 p-2 border rounded">
                        <h3 class="font-3xl font-bold">{{ comment.user }}</h3>
                        <p class="text-slate-400">{{ comment.content }}</p>
                        <span class="text-sm">{{ comment.date }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, onBeforeMount, onUpdated, onBeforeUpdate } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Button from '../components/Button.vue';
import axios from 'axios';

const router = useRouter();
const route = useRoute();
const ProductDetail = ref({});
const textComment = ref('');
const listComments = ref([]);


onBeforeMount(() => {
    const getData = async () => {
        const res = await axios.get(`http://localhost:8000/products/${route.params.id}`);
        ProductDetail.value = res.data.product;
        listComments.value = res.data.allComments;
        // console.log(listComments.value)
    }
    getData();
})



async function onComment() {
    const newComment = {
        content: textComment.value,
        user: 'Trung',
        date: new Date().toUTCString()
    }
    await axios.post(`http://localhost:8000/products/${route.params.id}/comments`, newComment)
    .then(() => textComment.value = '')
    .then(() => router.go(0));
}


</script>

<style scoped>
.comment-menu {
    list-style: none;
}
</style>