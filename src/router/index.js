// import vue router
import { createRouter, createWebHistory } from 'vue-router';

// import vuex store
import store from '@/store';

// define as routes
const routes = [
    { 
        path: '/register',
        name: 'register',
        component: () => import('../views/auth/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/Login.vue')
    },
    {
        path: '/customer/dashboard',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "login" */ '@/views/dashboard/Index.vue'),
        //chek is loggedIn
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/customer/order',
        name: 'order',
        component: () => import( /* webpackChunkName: "login" */ '@/views/order/Index.vue'),
        //chek is loggedIn
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/customer/order/:snap_token',
        name: 'detail-order',
        component: () => import( /* webpackChunkName: "login" */ '@/views/order/Show.vue'),
        //chek is loggedIn
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "login" */ '@/views/home/Index.vue'),
    },
    {
        path: '/product/:slug',
        name: 'detail_product',
        component: () => import( /* webpackChunkName: "login" */ '@/views/product/Show.vue'),
    },
    {
        path: '/categories',
        name: 'categories',
        component: () => import( /* webpackChunkName: "login" */ '@/views/category/Index.vue'),
    },
    {
        path: '/category/:slug',
        name: 'detail_category',
        component: () => import( /* webpackChunkName: "login" */ '@/views/category/Show.vue'),
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import( /* webpackChunkName: "login" */ '@/views/cart/Index.vue'),
        meta: {
          //chek is loggedIn
          requiresAuth: true
        }
    }

]

// create router
const router = createRouter({
    history: createWebHistory(),
    routes
})

// define route for handle auth
router.beforeEach((to, from, next) => {
    // check if route requires auth
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //cek nilai dari getters isLoggedIn di module auth
        if (store.getters['auth/isLoggedIn']) {
            // go to login
            next()
            return
        } 
            next('/login')
        } else {
        // proceed to route
        next()
    }
})

// export router
export default router