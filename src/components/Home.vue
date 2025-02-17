<template>
    <Header/>
    <div>
    <v-carousel height="500" hide-delimiters  cycle>

        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" cover>

        </v-carousel-item>
    </v-carousel>
<Footer/>
</div>


</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue';
import Product from './Product/Product.vue';
export default{
    name:'Home',
    components:{
        Header,
        Footer,
        Product
    },

    data() {
        return {

            items: [{
                    id: '1',
                    src: require('../assets/img/slide1.jpg')
                },
                {
                    id: '2',
                    src: require('../assets/img/slide2.jpg')
                },
                {
                    id: '3',
                    src: require('../assets/img/slide3.jpg')
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>