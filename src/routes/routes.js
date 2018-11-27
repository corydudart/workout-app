import DashboardLayout from '../pages/Dashboard/Layout/DashboardLayout.vue'
import AuthLayout from '../pages/Dashboard/Pages/AuthLayout.vue'
// GeneralViews
import NotFound from '../pages/GeneralViews/NotFoundPage.vue'

// Page Headers
import DefaultHeader from '../pages/Dashboard/DefaultHeader'
import DashboardHeader from '../pages/Dashboard/Dashboard/DashboardHeader.vue'
import SweetAlertHeader from '../pages/Dashboard/Components/Headers/SweetAlertHeader'
import CalendarHeader from '../pages/Dashboard/Calendar/CalendarHeader'
import VectorMapsHeader from '../pages/Dashboard/Maps/VectorMapsHeader'

// Dashboard pages
import Dashboard from '../pages/Dashboard/Dashboard/Dashboard.vue'

// Pages
const User = require('../pages/Dashboard/Pages/UserProfile.vue');
const Pricing = require('../pages/Dashboard/Pages/Pricing.vue');
const TimeLine = require('../pages/Dashboard/Pages/TimeLinePage.vue');
const Login = require('../pages/Dashboard/Pages/Login.vue');
const Logout = require('../pages/Dashboard/Pages/Logout.vue');
const Register = require('../pages/Dashboard/Pages/Register.vue');
const Lock = require('../pages/Dashboard/Pages/Lock.vue');

// Components pages
const Buttons = require('../pages/Dashboard/Components/Buttons.vue');
const GridSystem = require('../pages/Dashboard/Components/GridSystem.vue');
const Panels = require('../pages/Dashboard/Components/Panels.vue');
const SweetAlert = require('../pages/Dashboard/Components/SweetAlert.vue');
const Notifications = require('../pages/Dashboard/Components/Notifications.vue');
const Icons = require('../pages/Dashboard/Components/Icons.vue');
const Typography = require('../pages/Dashboard/Components/Typography.vue');

// Forms pages
const RegularForms = require('../pages/Dashboard/Forms/RegularForms.vue');
const ExtendedForms = require('../pages/Dashboard/Forms/ExtendedForms.vue');
const ValidationForms = require('../pages/Dashboard/Forms/ValidationForms.vue');
const Wizard = require('../pages/Dashboard/Forms/Wizard.vue');

// TableList pages
const RegularTables = require('../pages/Dashboard/Tables/RegularTables.vue');
const ExtendedTables = require('../pages/Dashboard/Tables/ExtendedTables.vue');
const PaginatedTables = require('../pages/Dashboard/Tables/PaginatedTables.vue');
// Maps pages
const GoogleMaps = require('../pages/Dashboard/Maps/GoogleMaps.vue');
const FullScreenMap = require('../pages/Dashboard/Maps/FullScreenMap.vue');
const VectorMaps = require('../pages/Dashboard/Maps/VectorMaps.vue');

// Calendar
const Calendar = require('../pages/Dashboard/Calendar/CalendarRoute.vue');
// Charts
const Charts = require('../pages/Dashboard/Charts.vue');
import Widgets from '../pages/Dashboard/Widgets.vue'



///WORKOUT APP
//Exercises
const Exercies = require('../pages/Workout/Exercies');

let componentsMenu = {
    path: '/components',
    component: DashboardLayout,
    redirect: '/components/buttons',
    name: 'Components',
    children: [
        {
            path: 'buttons',
            name: 'Buttons',
            components: {default: Buttons, header: DefaultHeader}
        },
        {
            path: 'grid-system',
            name: 'Grid System',
            components: {default: GridSystem, header: DefaultHeader}
        },
        {
            path: 'panels',
            name: 'Panels',
            components: {default: Panels, header: DefaultHeader}
        },
        {
            path: 'sweet-alert',
            name: 'Sweet Alert',
            components: {default: SweetAlert, header: SweetAlertHeader}
        },
        {
            path: 'notifications',
            name: 'Notifications',
            components: {default: Notifications, header: DefaultHeader}
        },
        {
            path: 'icons',
            name: 'Icons',
            components: {default: Icons, header: DefaultHeader}
        },
        {
            path: 'typography',
            name: 'Typography',
            components: {default: Typography, header: DefaultHeader}
        }

    ]
}
let formsMenu = {
    path: '/forms',
    component: DashboardLayout,
    redirect: '/forms/regular',
    name: 'Forms',
    children: [
        {
            path: 'regular',
            name: 'Regular Forms',
            components: {default: RegularForms, header: DefaultHeader}
        },
        {
            path: 'extended',
            name: 'Extended Forms',
            components: {default: ExtendedForms, header: DefaultHeader}
        },
        {
            path: 'validation',
            name: 'Validation Forms',
            components: {default: ValidationForms, header: DefaultHeader}
        },
        {
            path: 'wizard',
            name: 'Wizard',
            components: {default: Wizard, header: DefaultHeader}
        }
    ]
}

let tablesMenu = {
    path: '/table-list',
    component: DashboardLayout,
    redirect: '/table-list/regular',
    name: 'Tables',
    children: [
        {
            path: 'regular',
            name: 'Regular Tables',
            components: {default: RegularTables, header: DefaultHeader}
        },
        {
            path: 'extended',
            name: 'Extended Tables',
            components: {default: ExtendedTables, header: DefaultHeader}
        },
        {
            path: 'paginated',
            name: 'Paginated Tables',
            components: {default: PaginatedTables, header: DefaultHeader}
        }]
}

let mapsMenu = {
    path: '/maps',
    component: DashboardLayout,
    name: 'Maps',
    redirect: '/maps/google',
    children: [
        {
            path: 'google',
            name: 'Google Maps',
            components: {default: GoogleMaps, header: DefaultHeader}
        },
        {
            path: 'full-screen',
            name: 'Full Screen Map',
            meta: {
                hideContent: true,
                hideFooter: true
            },
            components: {default: FullScreenMap}
        },
        {
            path: 'vector-map',
            name: 'Vector Map',
            components: {default: VectorMaps, header: VectorMapsHeader}
        }
    ]
}

let pagesMenu = {
    path: '/pages',
    component: DashboardLayout,
    name: 'Pages',
    redirect: '/pages/user',
    children: [
        {
            path: 'user',
            name: 'User Page',
            components: {default: User, header: DefaultHeader}
        },
        {
            path: 'timeline',
            name: 'Timeline Page',
            components: {default: TimeLine, header: DefaultHeader}
        }
    ]
}

let authPages = {
    path: '/',
    component: AuthLayout,
    name: 'Authentication',
    children: [
        {
            path: '/login',
            name: 'Login',
            meta: {requiresAuth: false},
            component: Login
        },
        {
            path: '/logout',
            name: "Logout",
            component: Logout
        },
        {
            path: '/register',
            meta: {requiresAuth: false},
            name: 'Register',
            component: Register
        },
        {
            path: '/pricing',
            name: 'Pricing',
            component: Pricing
        },
        {
            path: '/lock',
            name: 'Lock',
            component: Lock
        }
    ]
}

let workoutPages = {
    path: '/workouts',
    component: DashboardLayout,
    name: 'Workout',
    redirect: '/workouts/',
    children: [
        {
            path: 'exercises',
            name: 'Exercise List',
            components: {default: Exercies, header: DefaultHeader}
        }
    ]
}

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Home'
    },
    componentsMenu,
    formsMenu,
    tablesMenu,
    mapsMenu,
    pagesMenu,
    authPages,
    workoutPages,
    {
        path: '/',
        meta: {requiresAuth: true},
        component: DashboardLayout,
        redirect: '/dashboard',
        name: 'Dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'DashboardHeader',
                components: {default: Dashboard, header: DashboardHeader}
            },
            {
                path: 'calendar',
                name: 'Calendar',
                components: {default: Calendar, header: CalendarHeader}
            },
            {
                path: 'charts',
                name: 'Charts',
                components: {default: Charts, header: DefaultHeader}
            },
            {
                path: 'widgets',
                name: 'Widgets',
                components: {default: Widgets, header: DefaultHeader}
            }
        ]
    },
    {path: '*', component: NotFound}
];

export default routes
