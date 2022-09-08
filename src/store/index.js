//import vuex
import { createStore } from 'vuex'

//import modules auth
import auth from './module/auth'

//create store vuex
export default createStore({

    modules: {
        auth
    }

})