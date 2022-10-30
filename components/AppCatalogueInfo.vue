<template>
  <section class="catalogueinfo">
    <h2>Catalogues</h2>
    <br />
    <v-container>
      <div class="mx-0 mx-md-12">
        <v-row>
          <v-col v-for="catalogueName in datasource" :key="catalogueName" cols="auto">
            <v-card class="mx-auto my-12" width="250" max-height="400">
              <v-img height="220" :src="require('@/assets/beericon.png')"></v-img>
              <v-card-title>
                <div class="d-inline-block text-no-wrap secondary text-truncate">
                  {{ catalogueName }}
                </div>
              </v-card-title>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn color="deep-purple lighten-2" active-class="false" text :to="`/catalogue/?name=${catalogueName}`"> View catalogue > </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    datasource: {
      type: [Array]
    }
  }
}
</script>

<style scoped>
</style>
