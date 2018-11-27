import VueRouter from 'vue-router';

let routes = [
    {
        path: '/Login',
        component: require('./views/auth/Login')
    },
    {
        path: '/Logout',
        component: require('./views/auth/Logout')
    },
    {
        path: '/Register',
        component: require('./views/register')
    },

];

export default new VueRouter({
    routes
});
