import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Card from '../components/cards/Card.vue';
import Field from '../components/Field.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/card',
        name: 'card',
        component: Card
    },
    {
        path: '/field',
        name: 'field',
        component: Field
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router