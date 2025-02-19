<template>
    <v-toolbar>
        <router-link to="/">
            <v-img :src="src" width="150px" height="100px" />
        </router-link>
    
        <v-toolbar-title>
            <v-btn text to="/">
                Home
            </v-btn>
        </v-toolbar-title>
        
       <!-- <v-toolbar-title>
            <v-btn text to="/ordersummary">
                Orders
            </v-btn>
        </v-toolbar-title>-->

        
    </v-toolbar>
        <router-view></router-view>
    
    </template>
    
    <script>
    export default {
        name: 'Order',
    
        data() {
            return {
                src: require("/src/assets/img/app.png")
            }
        }
    }
    </script>
    
    <style>
    </style>
    