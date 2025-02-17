<template>
  <h3>{{ isEditMode ? "Edit" : "Add" }} Product</h3>
  <v-card class="mx-auto" max-width="400" max-height="700">
    <v-container>
      <v-text-field
        label="Enter Product Name"
        v-model="Product.productName"
      ></v-text-field>
      <v-text-field
        label="Enter Product Description"
        v-model="Product.productDescription"
      ></v-text-field>
      <v-text-field
        label="Enter Product Price"
        v-model="Product.productPrice"
        type="number"
      ></v-text-field>
      <v-text-field
        label="Enter Product Quantity"
        v-model="Product.quantity"
        type="number"
      ></v-text-field>

      <v-file-input label="Upload Image" @change="imageUpload"></v-file-input>
      <v-img
        height="100px"
        width="450px"
        :src="imagePath + Product.productImage"
      />
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="success"
          variant="tonal"
          size="x-large"
          @click="showDialog = true"
        >
          Save
        </v-btn>
        <v-btn
          color="warning"
          variant="tonal"
          size="x-large"
          @click="cancelFunction"
          >Cancel</v-btn
        >
      </v-card-actions>
    </v-container>
  </v-card>

  <v-dialog v-model="showDialog" width="300px">
    <v-card>
      <v-card-text>Save Product Data</v-card-text>
      <v-card-actions>
        <v-btn color="error" @click="showDialog = false">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="saveProduct">{{
          isEditMode ? "Update" : "Add"
        }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  name: "AddProduct",
  data() {
    return {
      isEditMode: false,
      showDialog: false,
      imagePath: "https://localhost:7226/Photos/",
      Product: {
        productName: "",
        productDescription: "",
        productPrice: "",
        quantity: "",
        productImage: "default.jpg",
      },
    };
  },
  methods: {
    cancelFunction() {
      this.$router.push("/View");
    },
    saveProduct() {
      if (this.isEditMode) {
        this.updateProduct();
        this.$router.push("/View");
      } else {
        this.addProduct();
      }
      this.showDialog = false;
    },
    imageUpload(event) {
      let formData = new FormData();
      formData.append("file", event.target.files[0]);
      axios
        .post("https://localhost:7226/api/Product/saveFile", formData)
        .then((response) => {
          this.Product.productImage = response.data;
        });
    },
    async addProduct() {
      try {
        const productData = { ...this.Product };
        await axios.post("https://localhost:7226/api/Product", productData);
      } catch (error) {
        console.error(error);
      }
      
    },
    fetchProduct(id) {
      axios
        .get(`https://localhost:7226/api/Product/${id}`)
        .then((response) => {
          this.Product = response.data;
        })
        .catch((error) => {
          console.error(error);
          alert("Data Not Found");
        });

    },
    async updateProduct() {
      try {
        await axios.put(
          `https://localhost:7226/api/Product/${this.$route.params.id}`,
          this.Product
        );
      } catch (error) {
        console.log(error);
      }
      
    },
  },
  async mounted() {
    const productId = this.$route.params.id;
    if (productId) {
      this.isEditMode = true;
      this.fetchProduct(productId);
    }
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>
