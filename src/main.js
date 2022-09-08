import { createApp } from 'vue'
import App from './App.vue'

// import vue router
import router from './router';

// import store vuex
import store from './store';

// createApp(App).mount('#app')

const app = createApp(App)

app.use(router)

app.use(store)

// define mixins for global function
app.mixin({

    methods: {

        // money thousands function
        moneyFormat(number) {
            let reverse = number.toString().split('').reverse().join(''),
            thousands = reverse.match(/\d{1,3}/g);
            thousands = thousands.join('.').split('').reverse().join('');
            return thousands;
        },

        // calculate discount
        calculateDiscount(product) {
            return product.price - (product.price * (product.discount) / 100);
        }
    }
})

app.mount('#app')