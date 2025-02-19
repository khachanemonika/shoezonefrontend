<template>
     <v-container>
      <v-data-table 
      :headers="headers"
      :items="customers"
      class="elevation-1" dense>
      <template v-slot:item.actions="{ item }">
        <router-link :to="'/editUser/'+ item.CustomerId">
        <v-icon @click="editUser(item)" color="blue">mdi-pencil
           
        </v-icon></router-link>
        <v-icon @click="deleteUser(item)" color="red">mdi-delete</v-icon>
      </template>
    </v-data-table>
    
    </v-container>
</template>

<script>
import axios from 'axios'

export default{
    name:"ViewUser",

    data()
    {
        return{
      headers: [

        { title: 'ID', key:'CustomerId'},
        { title: 'Name', key: 'CustomerName' },
        { title: 'Email', key: 'CustomerEmail' },
        { title: 'MobileNo', key: 'MobileNo' },
        { text: 'Actions', value: 'actions' } 
      ],
            customers:[],
        }
    },
    mounted()
    {
        this.getCustomer();
    },
methods:{
    async getCustomer()
    {
        try{
            const result=await axios.get("https://localhost:7226/api/Customer");
            console.log(result)
                this.customers = result.data.map
                ((user)=>
                ({
                    CustomerId:user.customerId,
                    CustomerName:user.customerName,
                    CustomerEmail:user.customerEmail,
                    MobileNo:user.mobileNo
                })
            );
           
        }catch(error)
        {
            console.error(error);
        }
    },
    editUser(item)
    {

    }
}
}
</script>

<style scoped>
</style>