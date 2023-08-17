import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import ListItem from '../pages/ListItem.vue';
import AddItem from '../pages/AddItem.vue';
import UpdateItem from '../pages/UpdateItem.vue';

const routes = [
    { 
        path: '/',
        name: 'Home',
        component: Home 
    },
    { 
        path: '/about',
        name: 'About',
        component: About 
    },
    { 
        path: '/admin/products',
        name: 'List items',
        component: ListItem 
    },
    { 
        path: '/admin/products/add',
        name: 'Add item',
        component: AddItem
    },
    { 
        path: '/admin/products/update/:id',
        name: 'Update item',
        component: UpdateItem
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;