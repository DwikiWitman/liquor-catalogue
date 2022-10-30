<template>
  <section class="container catalogue">
    <AppCatalogueInfo :datasource="cataloguedata" />
  </section>
</template>

<script>
import { mapState } from 'vuex'
import AppCatalogueInfo from '@/components/AppCatalogueInfo'

export default {
  components: {
    AppCatalogueInfo
  },
  computed: {
    ...mapState(['cataloguedata'])
  }
}
</script>

<style scoped>
</style>
