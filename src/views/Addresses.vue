<template>
    <v-container text-xs-center justify-center>
        <v-layout row wrap>
            <v-flex xs12 justify-center>
                <h1>連絡先一覧</h1>
            </v-flex>

            <v-flex xs12 mt-5 ml-5>
                <router-link :to="{ name: 'address_edit' }">
                    <v-btn color="info">
                        連絡先追加
                    </v-btn>
                </router-link>
            </v-flex>

            <v-flex xs12 mt-3 ml-5 mr-5>
                <v-data-table :headers='headers' :items='addresses'>
                    <template v-slot:item.action="{ item }">
                        <div>
                            <span>
                                <router-link :to="{ name: 'address_edit', params: { address_id: item.id }} ">
                                    <v-icon small class="mr-2">mdi-checkbox-marked-outline</v-icon>
                                </router-link>
                            </span>
                            <span>
                                <v-icon small class="mr-2" @click="deleteConfirm(item.id)">
                                    mdi-close-box-outline
                                </v-icon>
                            </span>
                        </div>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>>

<script>
import { mapActions } from 'vuex'
export default {
    created () {
        this.addresses = this.$store.state.addresses;
    },
    data() {
        return {
            headers: [
                { text: '名前', value: 'name' },
                { text: '電話番号', value: 'tel' },
                { text: 'メールアドレス', value: 'email' },
                { text: '住所', value: 'address' },
                { text: '操作', value: 'action', sortable: false },
            ],
            addresses: []
        }
    },
    methods: {
        deleteConfirm (id){
            if (confirm('削除してよろしいですか？')) {
                this.deleteAddress({ id })
            }
        },
        ...mapActions(['deleteAddress'])
    }
}
</script>

<style scoped lang="scss">
a {
    text-decoration: none;
}

[v-cloak] {
    display: none;
}
</style>