import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'HotelList',
        component: Home,
    },
    {
        path: '/hotels/:uid/',
        name: 'HotelShow',
        component: () => import(/* webpackChunkName: "hotelShow" */ '../views/Hotel.vue'),

    },
    {
        path: '/hotels/:uid/reserve/',
        name: 'HotelReserve',
        component: () => import(/* webpackChunkName: "hotelReserve" */ '../views/Reserve.vue')
    },
    {path: "*", component: PageNotFound}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
