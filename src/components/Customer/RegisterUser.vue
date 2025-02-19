<template>
      <h3>{{ isEditMode ? "Edit" : "Add" }} Customer</h3>
  <v-container>
    <v-card class="mx-auto" max-width="400" max-height="700">
      <v-text-field label="Enter Full Name" v-model="Customer.customerName">
      </v-text-field>

      <v-text-field
        label="Enter Customer EmailId"
        v-model="Customer.customerEmail"
      >
      </v-text-field>

      <v-text-field label="Enter Customer MobileNo" v-model="Customer.MobileNo">
      </v-text-field>

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
        <v-spacer></v-spacer>
        <v-btn
          color="warning"
          variant="tonal"
          size="x-large"
          @click="cancelFunction"
          >Cancel</v-btn
        >
        <v-spacer></v-spacer>

        
        <v-dialog v-model="showDialog" width="250px">
            <v-card>
                <v-card-text>Save Customer Data</v-card-text>
                
                    <v-card-actions>
                      <v-btn v-on:click="saveCustomer">{{isEditMode ? "Update" : "Add"}}</v-btn>
                      <v-btn @click="showDialog = false">Cancle</v-btn>
                    </v-card-actions>
        </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios"
export default {
  name: "RegisterUser",
  data() {
    return {
        
        customers:[],
      showDialog: false,
      isEditMode: false,
      Customer: {
        customerName: "",
        customerEmail: "",
        MobileNo: "",
      },
    };
  },
  methods: {
    cancelFunction() {
      this.$router.push("/ViewUser");
    },
    saveCustomer() {
      
        if (this.isEditMode) 
        {
        this.updateCustomer();
      } else {
        this.addCustomer();
      }
      this.showDialog = false;
      this.$router.push("/ViewUser");
      
    },

    async addCustomer() {
      try {
        const customerData=this.Customer
        await axios.post("https://localhost:7226/api/Customer",customerData);
      } catch (error) {
        console.error(error);
      }
    },
    async updateCustomer()
    {
        try {
        await axios.put(
          'https://localhost:7226/api/Customer/'+this.$route.params.id,
          this.Customer
        );
      } catch (error) {
        console.log(error);
      }
    },
    fetchCustomer(id) {
      axios
        .get('https://localhost:7226/api/Customer/'+id)
        .then((response) => {
          this.Customer = response.data;
        })
        .catch((error) => {
          console.error(error);
          alert("Data Not Found");
        });
    
    },

    
  },
  async mounted() {
    const custId = this.$route.params.id;
    console.log(custId)
    if (custId) {
      this.isEditMode = true;
      this.fetchCustomer(custId);
    }
  },
};
</script>

<style scoped></style>
