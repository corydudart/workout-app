<template>
    <div class="container pt-lg-md">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <small>Sign up with credentials</small>
                        </div>
                        <form role="form" @submit.prevent="onSubmit()">
                            <div class="form-group">
                                <div class="input-group input-group-alternative mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-hat-3"></i></span>
                                    </div>
                                    <input class="form-control" placeholder="Name" type="text" v-model="name">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-alternative mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                    </div>
                                    <input class="form-control" placeholder="Email" type="email" v-model="email">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                    </div>
                                    <input class="form-control" placeholder="Password" type="password" v-model="password">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                    </div>
                                    <input class="form-control" placeholder="Confirm Password" type="password" v-model="password_confirmation">
                                </div>
                            </div>
                            <div class="text-muted font-italic">
                                <small>password strength:
                                    <span class="text-success font-weight-700">strong</span>
                                </small>
                            </div>
                            <!--<div class="row my-4">-->
                                <!--<div class="col-12">-->
                                    <!--<div class="custom-control custom-control-alternative custom-checkbox">-->
                                        <!--<input class="custom-control-input" id="customCheckRegister" type="checkbox">-->
                                        <!--<label class="custom-control-label" for="customCheckRegister">-->
                          <!--<span>I agree with the-->
                            <!--<a href="#">Privacy Policy</a>-->
                          <!--</span>-->
                                        <!--</label>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary mt-4">Create account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        mounted() {
            console.log('Register mounted.')
        },
        data() {
            return {
                email: '',
                password: '',
                password_confirmation: '',
                name: ''
            }
        },
        methods: {
            onSubmit() {
                axios.post('register', this.$data)
            }
        }
    }

</script>
