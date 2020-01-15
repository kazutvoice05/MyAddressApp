import Address from '../views/address/Address.vue'
import Addresses from '../views/address/Addresses.vue'
import AddressForm from '../views/address/AddressForm.vue'

export default {
    path: '/address',
    component: Address,
    children: [
        {
            path: 'list',
            name: 'address-list',
            component: Addresses
        },
        {
            path: 'edit/:address_id?',
            name: 'address-edit',
            component: AddressForm
        },
    ]
}