<template>
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
        <v-card>
          <v-card-title>{{ item.productName }}</v-card-title>
          <v-card-subtitle>{{ item.productDescription }}</v-card-subtitle>
          <v-card-subtitle>{{ item.productPrice}}</v-card-subtitle>

          <v-img
            :src="imagePath + item.productImage"
            height="100px"
            width="100%"
            :style="{ objectFit: 'cover' }"
          ></v-img>
          <v-card-actions>
            <router-link :to="'/edit/' + item.productID">
              <v-btn
                size="small"
                append-icon="mdi-account-edit"
                
                color="indigo"
              >
                
              </v-btn>
            </router-link>
            <v-btn
              v-on:click="deleteproduct(item.productId)"
              size="small"
              append-icon="mdi-delete-forever"
             
              color="red"
            >
             
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "View",
  data() {
    return {
      products: [],
      imagePath: "https://localhost:7226/Photos/",
      Product: [
        {
          ProductName: "",
          ProductDescription: "",
          ProductPrice: "",
          Quantity: "",
          ProductImage: "",
        },
      ],
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
    async deleteproduct(id) {
      let result = await axios.delete(
        "https://localhost:7226/api/Products/" + id
      );
      alert("delete");
      location.reload();
      if (result.status == 200) {
        this.getproduct();
      }
    },
  },
  mounted() {
    this.getproduct();
  },
};
</script>

<style scoped></style>
