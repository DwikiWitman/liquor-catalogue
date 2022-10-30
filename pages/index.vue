<template>
  <v-main>
    <AppHeader />
  </v-main>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '@/components/AppHeader'

export default {
  components: {
    AppHeader
  },
  computed: {
    ...mapState([
      'cataloguedata'
    ])
  }
}
</script>

<style>
</style>
