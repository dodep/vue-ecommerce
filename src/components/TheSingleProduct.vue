<template>
        <v-hover v-slot:default="{ hover }">
            <v-card
                :elevation="hover ? 24 : 2"
                :class="{ 'on-hover': hover }"
                
            >
                <v-img contain :src="product.image"
                
                @click="onImageClick(product.title)"
                height="300px"
                >
                </v-img>
                <v-card-title @click="onImageClick(product.title)" class="title">{{
                    product.title
                }}</v-card-title>

                <v-card-text @click="onImageClick(product.title)" class="display-1">{{( product.price ).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}$</v-card-text>

                <v-card-actions class="pa-0">
                    <v-btn color="orange" width="100%" @click="addToCart(product.id)">
                        Add To Cart
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-hover>
</template>
<script>
import {mapActions} from 'vuex'

export default {
    props: ["product"],

    data: function() {
        return {};
    },
    methods: {
        ...mapActions( 'TheCart',{
            add:'addToCartOrIncreaseQuantity'
        }),
        onImageClick(title){
            this.$router.push({name: 'Product Details', params: { product_title: title }})
        },
        addToCart(product_id){
            this.add(product_id)
        }
    },
};
</script>
<style scoped>
.fade-enter-active {
    transition: opacity 1s ease;
}
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
.text-shadow {
    text-shadow: 3px 1px 5px rgba(0, 0, 0, 0.7);
}
.v-card {
    transition: opacity;
}

.v-card:not(.on-hover) {
    opacity: 1;
}
.v-image:hover{
    cursor: pointer;
}
.v-card__title{
    word-break: normal !important;
}
.v-card__title, .v-card__text:hover{
    cursor: pointer;
}
</style>
