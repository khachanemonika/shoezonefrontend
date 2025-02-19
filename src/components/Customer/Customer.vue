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
        <v-toolbar-title>
            <v-btn text to="/regUser">
                Register Customer
            </v-btn>
        </v-toolbar-title>
        <v-toolbar-title>
            <v-btn text to="/ViewUser">
            View Customer
            </v-btn>
        </v-toolbar-title>

        <v-toolbar-title>
            <v-btn text to="/add">
                Order Product
            </v-btn>
        </v-toolbar-title>
    </v-toolbar>
        <router-view></router-view>
    
    </template>
    
    <script>
    export default {
        name: 'Customer',
    
        data() {
            return {
                src: require("/src/assets/img/app.png")
            }
        }
    }
    </script>
    
    <style>
    </style>
    