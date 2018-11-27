<template>

</template>

<script>
    export default {
        mounted() {
            console.log('Authentication mounted.');
            this.$store.commit('setUser', window.auth_user);
        },

        computed: {
            user(){
                return this.$store.state.user
            }
        }
    }
</script>
