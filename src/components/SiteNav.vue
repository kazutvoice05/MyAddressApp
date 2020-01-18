<template>
    <v-container fluid fill-height>
        <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <img v-if="photoURL" :src="photoURL">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ userName }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-group no-action value="true">
                    <template v-slot:activator>
                        <v-list-item-icon>
                            <v-icon>mdi-account-circle</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>MyAccount</v-list-item-title>
                    </template>

                    <v-list-item :to="{ name: 'user-profile' }">
                        <v-list-item-title>Profile</v-list-item-title>
                        <v-list-item-icon>
                            <v-icon>mdi-account-box-outline</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-group>
                <v-list-item v-for="(item, index) in items" :key='index' :to="item.link">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data: function () {
        return {
            items: [
                { title: '連絡先一覧', icon: 'mdi-menu', link: { name: 'address-list'} } 
            ]
        }
    },
    computed: {
        ...mapGetters(['userName', 'photoURL'])
    },
    methods: {
        toProfile () {
            this.$router.push({ name: 'user-profile' });
        },
    }

}
</script>