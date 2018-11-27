<template>

</template>

<script>
    export default {
        mounted() {
            console.log('Logout mounted.');
            axios.post('logout').then(function() {
                    window.auth_user = null;
                    window.location.href = '/login';

                }

            )
        }
    }
</script>
