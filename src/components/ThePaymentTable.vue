<template>
    <v-card class="mx-auto " elevation='24'>
    <v-card-title>
    Payment History: 
    </v-card-title>
        <v-card-text>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left title font-weight-bold">Items</th>
                            <th class="text-left title font-weight-bold">Total_Price</th>
                            <th class="text-left title font-weight-bold">Date_Created</th>
                            <th class="text-left title font-weight-bold">Is_Payed</th>
                            <th class="text-left title font-weight-bold">Is_Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in items" :key="index " v-if="item.items.length != 0" @click="onSelectedCart(item)">
                         
                            <td>
                                {{ item.items[0].split(" ").slice(4).join(" ") }}...({{item.total_items}}_items)
                            </td>
                            <td>
                                {{( item.total_price ).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}$
                            </td>
                            <td>
                                {{ moment(item.date_created).fromNow()}}
                            </td>
                            <td>
                                {{item.is_payed === true? 'Yes' : 'No'}}
                            </td>
                            <td>
                                {{item.is_active === true? 'Yes' : 'No'}}
                            </td>
                        </tr>
                        <tr></tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
    </v-card>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import moment from 'moment'

export default {
    props: ["items"],
    methods: {
        moment,
        ...mapActions( 'TheCart',{
            getTotalPrice:'getTotalPrice',
            addToCart:'addToCartOrIncreaseQuantity',
            minusQuantity:'removeFromCartOrDecreaseQuantity',
            removeItemAction:'removeFromCart'
        }),
        onSelectedCart(item){
            let str = JSON.stringify(item)
            this.$router.push({name: 'Cart', params:{cart:btoa(str)}})
        }
        

    },
    computed: {
        ...mapGetters( 'TheCart',{
            totalPrice:'getTotalPrice'
        })
    },
    data() {
        return {
            
        };
    },
    mounted() {
        this.getTotalPrice()
    },
};
</script>
<style scoped>
td:hover{
    cursor:pointer;
}
</style>
