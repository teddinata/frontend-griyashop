<template>
    <div class="container-fluid mt-4 mb-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card border-0 shadow rounded">
                    <div class="card-body">
                        <h4>REGISTER</h4>
                        <hr>
                        <form @submit.prevent="register">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Full Name</label>
                                        <input type="text" class="form-control"
                                            placeholder="Full Name"
                                            v-model="user.name"
                                        >
                                    </div>
                                    <div v-if="validation.name" class="mt-2 alert alert-danger">
                                        {{ validation.name[0] }}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="email" class="form-control"
                                            placeholder="Email"
                                            v-model="user.email"
                                        >
                                    </div>
                                    <div v-if="validation.email" class="mt-2 alert alert-danger">
                                        {{ validation.email[0] }}
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Passoword</label>
                                        <input type="password" class="form-control"
                                            placeholder="Password"
                                            v-model="user.password"
                                        >
                                    </div>
                                    <div v-if="validation.password" class="mt-2 alert alert-danger">
                                        {{ validation.password[0] }}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Confirm Password</label>
                                        <input type="password" class="form-control"
                                            placeholder="Confirm Password"
                                            v-model="user.password_confirmation"
                                        >
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
                <div class="register mt-3 text-center">
                    <p>
                        Sudah punya akun ? <router-link :to="{name: 'login'}">Login Disini !</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref, reactive} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'

export default {
    name: 'RegisterComponent',

    setup() {

        // user state
        const user = reactive({
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        })

        // validation state
        const validation = ([])

        // router
        const router = useRouter()

        // store
        const store = useStore()

        // function register, run if form submit
        function register(){

            // define variable
            let name = user.name
            let email = user.email
            let password = user.password
            let password_confirmation = user.password_confirmation

            // call action "register" from store vuex
            store.dispatch('auth/register', {
                name,
                email,
                password,
                password_confirmation
            }).then(() => {
                // if success, redirect to home
                router.push({name: 'dashboard'})
            }).catch((error) => {
                // if error, set validation state
               validation.value = error
            });
        }

        // return a state and function
        return {
            user,
            validation,
            register
        }
    }
}
</script>