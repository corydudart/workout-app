<template>
    <div class="row">
        <div class="col-lg-4 ml-auto mr-auto">
            <card class="card-signup text-center" no-footer-line>
                <template slot="header">
                    <h4 class="card-title">Register</h4>
                    <div class="social">
                    </div>
                </template>
                <form @submit.prevent>

                    <fg-input placeholder="Name..."
                              addon-left-icon="fa fa-user" v-model="model.name" name='name'
                              v-validate="modelValidations.name" :error="getError('name')">
                    </fg-input>

                    <fg-input placeholder="Email..."
                              addon-left-icon="fa fa-envelope" v-model="model.email" name="email"
                              v-validate="modelValidations.email" :error="getError('email')" data-vv-delay="200">
                    </fg-input>
                    <fg-input placeholder="Password..."
                              addon-left-icon="fa fa-key" type="password" v-model="model.password"
                              name="password" v-validate="modelValidations.password" :error="getError('password')">
                    </fg-input>
                    <fg-input placeholder="Confirm Password..."
                              addon-left-icon="fa fa-key" type="password"
                              v-model="model.password_confirmation" v-validate="modelValidations.confirmation"
                              name="confirmation" :error="getError('confirmation')">
                    </fg-input>
                    <n-button native-type="submit" @click.native.prevent="validate" type="primary">Register</n-button>

                </form>


            </card>
        </div>
    </div>
</template>
<script>

    export default {
        components: {},
        created() {
            const isUnique = value =>
                new Promise(resolve => {
                    if (value) {
                        axios.get('/api/check-unique-email/?email=' + value + '').then((response) => {
                            console.log(response.data.isUnique);
                            if (response.data.isUnique)
                                return resolve({
                                    valid: true
                                });
                            else
                                return resolve({
                                    valid: false,
                                    data: {
                                        message: `${value} is already taken.`
                                    }
                                });
                        });
                    }
                });
            this.$validator.extend("unique", {
                validate: isUnique,
                getMessage: (field, params, data) => data.message
            });
        },
        data() {
            return {
                model: {
                    email: '',
                    password: '',
                    password_confirmation: '',
                    name: ''
                },
                modelValidations: {
                    email: {
                        unique: true,
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        min: 8
                    },
                    confirmation: {
                        required: true,
                        min: 8,
                        confirmed: 'password'
                    },
                    name: {
                        required: true
                    }
                }

            }
        },
        methods: {
            getError(fieldName) {
                return this.errors.first(fieldName)
            },
            onSubmit() {
                axios.post('register', this.$data.model).then(
                    this.$router.push('/')
                )
            },
            validate() {
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
</style>
