import Api from '../../api/Api'

const category = {

    //set namespace true
    namespaced: true,

    //state
    state: {
        
        //data category
        categories: [],
    },

    //mutations
    mutations: {

        //set data category
        GET_CATEGORIES(state, categories) {
            state.categories = categories
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