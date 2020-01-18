import User from '../views/user/User.vue'
import Profile from '../views/user/Profile.vue'

export default {
    path: '/user',
    component: User,
    children: [
        {
            path: 'profile',
            name: 'user-profile',
            component: Profile
        }
    ]
}