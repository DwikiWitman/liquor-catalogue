<template>
  <main class="container">
    <section>
      <v-container class="hidden-sm-and-down">
        <h1>{{$route.query.name}} Catalogue</h1>
        <br/>
        <v-card outlined color="#f4f4f5" style="border: 2px solid #6c4b9e; border-radius: 40px">
          <v-card-text class="d-flex justify-space-between align-center">
            <v-container class="grey lighten-5">
              <v-row
                no-gutters
              >
                <!-- Left side -->
                <v-col
                v-for="product in productdata.slice(Math.floor(Math.random() * productdata.length/2), productdata.length/2)"
                :key="product.idDrink"
                >
                  <v-card
                    class="py-4"
                    outlined
                    color="#f4f4f5"
                    height="200"
                  >
                  <v-row>
                    <v-col col="12">
                      <v-row>
                        <v-col cols="3">
                          <v-card>
                              <v-img class="rounded-xl" eager height="150" width="auto" :src="product.strDrinkThumb"></v-img>
                          </v-card>
                        </v-col>
                        <v-col cols="7">
                          <h1>{{ product.strDrink }}</h1>
                          <h3>Price: Rp. {{ product.idDrink }}</h3>
                          <h5>{{ product.description }}</h5>
                          <br />
                          <v-btn rounded @click="addToCart(product)">Add to Cart</v-btn>
                          <v-btn rounded secondary :to="`/product/${product.idDrink}`"> View detail</v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  </v-card>
                </v-col>
                <!-- Right side -->
                <v-col
                v-for="product in productdata.slice(Math.floor(Math.random() * productdata.length/2), productdata.length/2)"
                :key="product.idDrink"
                >
                  <v-card
                    class="py-4"
                    outlined
                    color="#f4f4f5"
                    height="200"
                  >
                  <v-row>
                    <v-col col="12">
                      <v-row>
                        <v-col cols="3">
                          <v-card>
                              <v-img class="rounded-xl" eager height="150" width="auto" :src="product.strDrinkThumb"></v-img>
                          </v-card>
                        </v-col>
                        <v-col cols="7">
                          <h1>{{ product.strDrink }}</h1>
                          <h3>Price: Rp. {{ product.idDrink }}</h3>
                          <h5>{{ product.description }}</h5>
                          <br />
                          <v-btn rounded @click="addToCart(product)">Add to Cart</v-btn>
                          <v-btn rounded secondary :to="`/product/${product.idDrink}`"> View detail</v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
        <br />
      </v-container>
    </section>
    <AppToast v-if="cartSubmitted" style="position: fixed; top: 90%; left: 80%;">
      Order submitted <br />
      Check out more <nuxt-link to="/cart">to cart</nuxt-link>!
    </AppToast>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import AppToast from '@/components/AppToast'

export default {
  components: {
    AppToast
  },
  data () {
    return {
      cartSubmitted: false,
      rules: [
        v => v >= 1 || 'Min. 1'
      ]
    }
  },
  computed: {
    ...mapState(['productdata'])
  },
  created () {
    // console.log(this.$route.query.name)
    this.$store.dispatch('getProductData', this.$route.query.name).then((_) => {
    })
  },
  methods: {
    addToCart (product) {
      const formOutput = {
        item: product,
        quantity: 1,
        total: this.total(product)
      }

      this.cartSubmitted = true
      this.$store.commit('addToCart', formOutput)
    },
    total (product) {
      const calculated = product.idDrink + (product.idDrink * 0.11)
      return calculated
    }
  }
}
</script>

<style scoped>
</style>
