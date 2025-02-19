<template>
<div>
<v-toolbar>

        <v-img :src="src"></v-img>

        <v-toolbar-title>
            <v-btn text to="/HomeProduct">
                Product
            </v-btn>
        </v-toolbar-title>
        <v-toolbar-title>
            <v-btn text to="/seeproduct">
                Order
            </v-btn>
        </v-toolbar-title>
        <v-toolbar-title>
            <v-btn text to="/customer">
                Customer
            </v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>
    </v-toolbar>
</div>
</template>

<script>
export default {
    name: 'Header',

    data() {
        return {
            src: require("@/assets/img/homelogo.jpg")
        }
    }

}
</script>

<style scoped>

</style>
