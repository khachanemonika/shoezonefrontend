<template>
  <Order />
  <div class="text-right">
  <router-link to="/ordersummary">Go to Order Summary</router-link></div>
  <v-container>
   
    <v-row>
      <v-col
        v-for="item in products"
        :key="item.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="text-center">
          
          <v-img
            :src="imagePath + item.productImage"
            height="100px"
            width="100%"
            :style="{ objectFit: 'cover' }"
          ></v-img>
          <v-card-title>{{ item.productName }}</v-card-title>
          <v-card-subtitle>{{ item.productDescription }}</v-card-subtitle>

          <v-card-subtitle>
            <span
              class="mdi mdi-currency-inr"
              style="
                font-size: small;
                background-color: red;
                color: white;
                border-radius: 3px;
              "
            >
              {{ item.productPrice }}
            </span>
          </v-card-subtitle>

          <v-card-actions  class="justify-center">
           
            <v-btn
            class="text-none"
              size="small"
              prepend-icon="mdi-cart"
              variant="flat"
              color="primary"
              @click="cart.push(item)"
                >Add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    
  </v-container>
</template>
<script>
import axios from "axios";
import Order from "./Order.vue"; 

export default {
  name: "seeproduct",
  components:{
    Order
  },
  props:["cart"],
  data() {
    return {
      products: [],
      imagePath: "https://localhost:7226/Photos/",
    };
  },

  methods: {
    async getproduct() {
      try {
        const result = await axios.get("https://localhost:7226/api/Product");
        this.products = result.data;
      } catch (error) {
        console.error(error);
      }
    },
    
  },

  mounted() {
    this.getproduct();
  },
};
</script>

<style scoped>

</style>
