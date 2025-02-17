<template>
    
  <v-container>
    <v-carousel height="100" hide-delimiters cycle>
      <v-carousel-item
        v-for="(item, index) in slides"
        :key="index"
        class="d-flex flex-column align-center"
      >
        <p>{{ item.description }}</p>
      </v-carousel-item>
    </v-carousel>
  </v-container>

  <v-container>
    <v-row>
      <v-col v-for="(img, i) in images" :key="i" cols="12" sm="6" md="4" lg="3">
        <v-img :src="img.src" height="150px" cover></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "HomeProduct",

  data() {
    return {
      images: [
        {
          src: require("@/assets/img/adidas.png"),
        },
        {
          src: require("@/assets/img/bata.png"),
        },
        {
          src: require("@/assets/img/campus.png"),
        },
        {
          src: require("@/assets/img/nike.png"),
        },
      ],
      slides: [
        {
          title: "Slide 1",
          description: "New Styles On Sale: Up To 40% Off",
        },
        {
          title: "Slice 2",
          description: "Move, Shop, Customise & Celebrate With Us",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-carousel__controls {
  display: none !important;
}
</style>
