<template>
    <div class="col-md-4 ml-auto mr-auto">
        <form @submit.prevent>
            <card class="card-login card-plain">
                <div slot="header">
                    <div class="logo-container">
                        <img src="@/assets/img/now-logo.png" alt="">
                    </div>
                </div>
                <div v-if='model.badLogin' class="text-danger invalid-feedback text-center" style="display: block;">
                    These credentials do not match our records.
                </div>
                <div>
                    <fg-input class="no-border form-control-lg"
                              placeholder="Email"
                              name="email"
                              v-model="model.email"
                              v-validate="modelValidations.email"
                              :error="getError('email')"
                              addon-left-icon="fa fa-envelope">
                    </fg-input>

                    <fg-input class="no-border form-control-lg"
                              placeholder="Password"
                              type="password"
                              name="password"
                              v-model="model.password"
                              v-validate="modelValidations.password"
                              :error="getError('password')"
                              addon-left-icon="fa fa-key">
                    </fg-input>
                </div>

                <div slot="footer">
                    <n-button native-type="submit" @click.native.prevent="validate" type="primary" round block>
                        Login
                    </n-button>
                    <div class="pull-left">
                        <h6>
                            <router-link class="link footer-link" to="/register">
                                Create Account
                            </router-link>
                        </h6>
                    </div>
                </div>
            </card>
        </form>
    </div>
</template>
<script>

    export default {
               data() {
            return {
                model: {
                    email: '',
                    password: '',
                    subscribe: true,
                    badLogin: false
                },
                modelValidations: {
                    password: {
                        required: true,
                    },
                    email: {
                        required: true,
                    }
                }
            }
        },
        methods: {
            getError(fieldName) {
                return this.errors.first(fieldName)
            },
            onSubmit() {
                let global = this;
                axios.post('login', this.$data.model).then(function (response) {
                    window.auth_user = response.data;
                    global.$router.push('/dashboard')
                }).catch(function (error) {
                    console.log(error);
                    global.model.badLogin = true;
                })
            },
            validate() {
                this.badLogin = false;
                this.$validator.validateAll().then(isValid => {
                    if (isValid) {
                        this.$emit('on-submit', this.onSubmit(), isValid)
                    }
                })
            }

        }
    }
</script>
<style>
    .navbar-nav .nav-item p {
        line-height: inherit;
        margin-left: 5px;
    }
</style>
