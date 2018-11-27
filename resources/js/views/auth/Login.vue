<template>
    <div>
        <div class="container-fluid pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="card bg-secondary shadow border-0">
                        <div class="card-body px-lg-5 py-lg-5">
                            <div class="text-center text-muted mb-4">
                                <small>Sign in with credentials</small>
                            </div>
                            <form role="form" @submit.prevent="onSubmit()">
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Email" type="email" v-model="email">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group has-danger">
                                        <div class="input-group-prepend is-invalid">
                                                    <span class="input-group-text"><i
                                                            class="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input class="form-control is-invalid" placeholder="Password" type="password"
                                               v-model="password">
                                    </div>
                                </div>
                                <div class="custom-control custom-control-alternative custom-checkbox">
                                    <input class="custom-control-input" id="customCheckLogin" type="checkbox"
                                           v-model="remember">
                                    <label class="custom-control-label" for="customCheckLogin">
                                        <span>Remember me</span>
                                    </label>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary my-4">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-6">
                            <router-link to="/ForgotPassword">Forgot password?</router-link>
                        </div>
                        <div class="col-6 text-right">
                            <router-link to="/Register">Create new account</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            console.log('Login mounted.')
        },
        data() {
            return {
                email: '',
                password: '',
                remember: false
            }
        },
        methods: {
            onSubmit() {
                let global = this;
                axios.post('login', this.$data).then(function(response){
                        window.auth_user = response.data;
                        window.location.href = '/';
                    }
                )
            },

        }
    }
</script>

