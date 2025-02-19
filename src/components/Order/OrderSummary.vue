<template>
<router-link to="/seeproduct">Back to Product</router-link>
<v-container>
    <h2>Cart</h2>
    <v-list>

        <v-list-item v-for="item in cart" :key="item.id" class="d-flex align-center">
            <template v-slot:prepend>
                <v-avatar size="80" class="mr-4">
                    <v-img :src="imagePath + item.productImage" height="100px" width="100px"></v-img>
                </v-avatar>
            </template>

            <v-list-item-content>
                <v-list-item-title class=" text-h6 font-weight-bold">{{ item.productName }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
                <span class="text-h7 font-weight-bold">{{ item.productPrice }}₹</span>
            </v-list-item-action>

        </v-list-item>

    </v-list>
    <v-divider></v-divider>
   
    <v-card class="pa-4  text-right">
        <h4>Total Bill:     {{ totalBill }}₹</h4>
        <v-btn color="success" @click="checkout">Checkout</v-btn>
    </v-card>
</v-container>
</template>

   
<script>
export default {
    name: "ordersummary",

    data() {
        return {
            imagePath: "https://localhost:7226/Photos/",
        }
    },
    props: ["cart"],
    methods:{
    
        checkout() {
      if (this.cart.length > 0) {
        alert("Checkout successful! Your order has been placed.");
      }
      else
      {
        alert("Not Selected Item.")
      }
      location.reload()
    }

    },
    computed: {

        totalBill() {
            return this.cart.reduce((total, item) => total + item.productPrice, 0)
        }
    }
}
</script>

<style scoped>
.v-list-item {

    display: flex;
    justify-content: space-between;
}
</style>
