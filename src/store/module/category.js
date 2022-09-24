import Api from '../../api/Api'

const category = {

    //set namespace true
    namespaced: true,

    //state
    state: {
        
        //data category
        categories: [],

        // data productInCategory
        productInCategory: [],
    },

    //mutations
    mutations: {

        //set data category
        GET_CATEGORIES(state, categories) {
            state.categories = categories
        },

        //set data productInCategory
        PRODUCT_IN_CATEGORY(state, products) {
            state.productInCategory = products
        }

    },

    //actions
    actions: {

        //get data category
        getCategories({ commit }) {
            Api.get('/categories').then(response => {
                commit('GET_CATEGORIES', response.data.categories)
            }).catch(error => {
                console.log(error)
            })
        },

        //get data productInCategory
        getProductInCategory({ commit }, slug) {
            Api.get(`/category/${slug}`).then(response => {
                commit('PRODUCT_IN_CATEGORY', response.data.product)
            }).catch(error => {
                console.log(error)
            })
        }
    },

    //getters
    getters: {

        //get data category
        getCategories(state) {
            return state.categories
        }
    }

}

export default category