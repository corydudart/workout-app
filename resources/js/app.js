/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');//Mostly axios setup

window.Vue = require('vue');
import VueRouter from 'vue-router';
import Vuex from "vuex";
import DashboardPlugin from '../../src/dashboard-plugin'
import App from '../../src/App'
// require("@babel/core").transform("code", {
//     plugins: ["@babel/plugin-syntax-dynamic-import"]
// });

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(DashboardPlugin);

const store = new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    getters: {
        getUser: state => {
            return state.user
        },
        authenticated: state => {
            return state.user !== null
        }
    }
});


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */


// const files = require.context('./', true, /\.vue$/i)

// files.keys().map(key => {
//     return Vue.component(key.split('/').pop().split('.')[0], files(key))
// })

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// import router from './routes';
import routes from '../../src/routes/routes'

const router = new VueRouter({
    routes, // short for routes: routes
});

router.beforeEach((to, from, next) => {
    console.log(to, from, next);

 console.log(window.auth_user);
    if (to.matched.some(record => record.meta.requiresAuth) && window.auth_user === null) {
        next({
            path: '/login',
            query: {
                redirect: to.fullPath,
            },
        });
    }
    // if (to.matched.some(record => record.meta.requiresAuth)) {
    //     if (USER DOES NOT EXIST IN LOCAL STORAGE) {
    //         next({
    //             path: '/login',
    //             query: {
    //                 redirect: to.fullPath,
    //             },
    //         });
    //     } else {
    //         next();
    //     }
    // } else {
    //     next();
    // }
    next();
})

// const app = new Vue({
//     el: '#app',
//     router,
//     store
//
// });

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
