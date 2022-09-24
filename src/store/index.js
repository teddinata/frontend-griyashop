//import vuex
import { createStore } from 'vuex'

//import modules auth
import auth from './module/auth'
import order from './module/order'
import category from './module/category'
import slider from './module/slider'
import product from './module/product'

//create store vuex
export default createStore({

    modules: {
        auth,
        order,
        category,
        slider,
        product
    }

})