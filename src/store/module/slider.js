import Api from '../../api/Api'

const slider = {

    //set namespace true
    namespaced: true,

    //state
    state: {
        // index slider 
        sliders: [],
    },

    //mutations
    mutations: {

        //set data slider
        GET_SLIDERS(state, sliders) {
            state.sliders = sliders
        }

    },

    //actions
    actions: {

        //get data slider
        getSliders({ commit }) {
            Api.get('/sliders').then(response => {
                commit('GET_SLIDERS', response.data.sliders)
            }).catch(error => {
                console.log(error)
            })
        }

    },

    //getters
    getters: {

        //get data slider
        getSliders(state) {
            return state.sliders
        }
    }

}

export default slider