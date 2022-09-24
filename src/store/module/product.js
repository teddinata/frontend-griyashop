import Api from '../../api/Api'

const product = {

    //set namespace true
    namespaced: true,

    //state
    state: {
        
        //  index data product 
        products: [],
    },

    //mutations
    mutations: {

        //set data product
        GET_PRODUCTS(state, products) {
            state.products = products
        }
    },

    //actions
    actions: {

        //get data product
        getProducts({ commit }) {
            Api.get('/products').then(response => {
                commit('GET_PRODUCTS', response.data.products)
            }).catch(error => {
                console.log(error)
            })
        }
    },

    //getters
    getters: {

        //get data product
        getProducts(state) {
            return state.products
        }
    }

}

export default product