<template>
  <div>
    <v-container>
      <template>
        <v-btn
        @click="$router.back()"
        color="mr-2 mb-3"
        small
        rounded
        elevation="0"
        dark>
          <v-icon small>mdi-chevron-double-left</v-icon>Back
        </v-btn>
        <br />
        <br />
        <div class="text-h1 text-sm-h3 font-weight-black" style="color: #f47a20;">Catalogue > {{ productdetaildata.strCategory }}</div>
        <br />
        <v-row class="my-4">
          <v-col cols="12" class="d-flex align-center">
            <v-row>
              <v-col cols="12" md="4" lg="3">
                <v-card class="d-flex align-center rounded-xl pa-12 mr-12">
                  <v-img :src="productdetaildata.strDrinkThumb" contain ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" md="8" lg="9">
                <div class="text-uppercase text-h5 text-sm-h3 font-weight-black" style="font-weight: bold">{{ productdetaildata.strDrink }}</div>
                <div class="text-h6 text-sm-h4 text-uppercase" style="color: rgba(0, 0, 0, 0.5)">{{ productdetaildata.strInstructions }}</div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-btn v-if="productdetaildata.strAlcoholic"
              class="mt-6 text-body-1 text-sm-h6"
              small
              rounded
              color="#F47A20"
              style="color: white">{{ productdetaildata.strAlcoholic }}</v-btn>
            <v-btn v-if="productdetaildata.strIngredient1"
              class="mt-6 text-body-1 text-sm-h6"
              small
              rounded
              color="#F47A20"
              style="color: white">{{ productdetaildata.strIngredient1 }}</v-btn>
            <v-btn v-if="productdetaildata.strIngredient2"
              class="mt-6 text-body-1 text-sm-h6"
              small
              rounded
              color="#F47A20"
              style="color: white">{{ productdetaildata.strIngredient2 }}</v-btn>
            <v-btn v-if="productdetaildata.strIngredient3"
              class="mt-6 text-body-1 text-sm-h6"
              small
              rounded
              color="#F47A20"
              style="color: white">{{ productdetaildata.strIngredient3 }}</v-btn>
          </v-col>
        </v-row>
        <br />
      </template>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['productdetaildata'])
  },
  created: function () {
    this.$store.dispatch('getProductDetailData', this.$route.params.id).then((_) => {})
  },
  methods: {}
}
</script>
