import Api from '../../api/Api'

const auth = {

    // set namespaced to true
    namespaced: true,

    // state
    state: {
        
        // state untuk token, pakai localstorage, untuk menyimpan informasi tentang token jwt
        token: localStorage.getItem('token') || '',

        // state untuk user, pakai localstorage, untuk menyimpan informasi tentang user login 
        user: JSON.parse(localStorage.getItem('user')) || {},
    },

    // mutations
    mutations: {

        // update state token dan state user dari hasil response
        AUTH_SUCCESS(state, token, user) {
            state.token = token // <-- assign state token dengan response token
            state.user = user // <-- assign state user dengan response data user
        }
    },

    // actions
    actions: {

        // action register
        register({ commit }, user) {

            // define callback promise
            return new Promise((resolve, reject) => {

                // send data ke server
                Api().post('/register', {

                    // data yang dikirim ke server
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    password_confirmation: user.password_confirmation
                })
                .then(response => {
                        
                    // define variable dengan isi hasil response dari server
                    const token = response.data.token
                    const user = response.data.user

                    // simpan token dan user ke localstorage
                    localStorage.setItem('token', token)
                    localStorage.setItem('user', JSON.stringify(user))

                    // set default header axios dengan token 
                    Api.defaults.headers.common['Authorization'] = 'Bearer ' + token

                    // commit auth success ke mutation
                    commit('AUTH_SUCCESS', token, user)

                    // resolve promise
                    resolve(response)
                    
                }).catch(error => {

                    // jika gagal remove ke localStorage dengan key token
                    localStorage.removeItem('token')

                    // reject promise
                    reject(error.response.data)
                })
            })
        }
    },

    // getters
    getters: {

    },
}

export default auth