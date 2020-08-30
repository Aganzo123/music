import VueRouter from 'vue-router'
import first from '../../components/first.vue'
import index from '../../components/index.vue'
import bang from '../../components/bang.vue'
import mv from '../../components/mv.vue'
import category from '../../components/category.vue'
import singer from '../../components/singer.vue'
import bang_content from '../../components/bang_content.vue'
import index_mv from '../../components/index_mv.vue'
import login from '../../components/login.vue'
import login_em from '../../components/login_em.vue'
import login_ph from '../../components/login_ph.vue'
import login_em_zc from '../../components/login_em_zc.vue'
import login_ph_m from '../../components/login_ph_m.vue'
export default new VueRouter({
    routes: [{
        path: '/',
        component: first,
        children: [{
            path: '/index',
            component: index
        },
        {
            path: '/bang',
            component: bang
        },
        {
            path: '/mv',
            component: mv
        },
        {
            path: '/category',
            component: category
        },
        {
            path: '/singer',
            component: singer
        },
        ],
        redirect: '/index'
    },
    {
        path: '/content',
        component: bang_content,
    },
    {
        path: '/login',
        component: login,
    },
    {
        path: '/login_ph',
        component: login_ph,
    },
    {
        path: '/login_em',
        component: login_em,
    },
    {
        path: '/indexmv',
        component: index_mv,

    },
    {
        path: '/login_ph_m',
        component: login_ph_m,

    },
    {
        path: '/ login_em_zc',
        component:  login_em_zc,

    }, 
    {
        path: '/*',
        redirect: '/index'
    }],

})