//import vuex
import { createStore } from 'vuex'

//import modules auth
import auth from './module/auth'
import order from './module/order'
import category from './module/category'

//create store vuex
export default createStore({

    modules: {
        auth,
        order,
        category
    }

})