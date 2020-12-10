let Routes = [

    // dev hq

    {
        component: () => import(
            /* webpackChunkName: "Dev_home" */
                        '../views/Dev_home.vue'),
            name:                'Dev_home',
            alias:              '/Dev_home',
            path:               '/',
    },

    {
        component: () => import(
            /* webpackChunkName: "Dev_blog" */
                        '../views/Dev_blog.vue'),
            name:                'Dev_blog',
            path:               '/Dev_blog',
    },

    {
        component: () => import(
            /* webpackChunkName: "Dev_blog" */
                        '../views/Dev_blog.vue'),
            name:                'Dev_blog',
            path:               '/Dev_blog/:pageid',
            props: true, // props = [ ...props, 'pageid' ]
    },

    // dev log

    {
        component: () => import(
            /* webpackChunkName: "PageIntro" */
                        '../views/PageIntro.vue'),
            name:                'PageIntro',
            path:               '/PageIntro',
            alias:              '/start',
    },
    {
        component: () => import(
            /* webpackChunkName: "PageHome" */
                        '../views/PageHome.vue'),
            name:                'PageHome',
            path:               '/PageHome',
    },
    {
        component: () => import(
            /* webpackChunkName: "PageM0" */
                        '../views/PageM0.vue'),
            name:                'PageM0',
            path:               '/PageM0',
    },
    {
        component: () => import(
            /* webpackChunkName: "PageM0-Form" */
                        '../views/PageM0-Form.vue'),
            name:                'PageM0-Form',
            path:               '/PageM0-Form',
    },
    {
        component: () => import(
            /* webpackChunkName: "PageM0-2-FinancialData" */
                        '../views/PageM0-2-FinancialData.vue'),
            name:                'PageM0-2-FinancialData',
            path:               '/PageM0-2-FinancialData',
    },

// deprecated

    {
        component: () => import(
            /* webpackChunkName: "PageM0-SetFocus" */
                        '../views/PageM0-SetFocus.vue'),
            name:                'PageM0-SetFocus',
            path:               '/PageM0-SetFocus',
    },
    {
        component: () => import(
            /* webpackChunkName: "PageM0-FinancialData" */
                        '../views/PageM0-FinancialData.vue'),
            name:                'PageM0-FinancialData',
            path:               '/PageM0-FinancialData',
    },
    {
        component: () => import(
            /* webpackChunkName: "PageM0-ITstrategy" */
                        '../views/PageM0-ITstrategy.vue'),
            name:                'PageM0-ITstrategy',
            path:               '/PageM0-ITstrategy',
    },

]

// ---------------------------- 404

Routes = [ ...Routes,
    {
        path:  '/page-not-found',
        alias: '/*',
        component: { render: (h) => h('div', ['404-vue, Page Not Found In Framework']) },
        meta: {
            requiresAuthorisation: false,
        },
    } ]

// ---------------------------- export ready

export default Routes