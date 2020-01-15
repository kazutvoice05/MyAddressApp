import Authorization from '../views/authorization/Authorization.vue'
import Loading from '../views/authorization/Loading.vue'

export default {
    path: '/auth',
    component: Authorization,
    children: [
        {
            path: 'loading',
            name: 'auth-loading',
            component: Loading 
        }
    ]
}