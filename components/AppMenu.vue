<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">
          <AppLogo />
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/catalogues">Lick X Liquor</nuxt-link>
      </li>
    </ul>
    <div v-if="cartItemCount > 0" class="smallnum">{{ cartItemCount }}</div>
    <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import AppLogo from '@/components/AppLogo'

export default {
  components: {
    AppLogo
  },
  computed: {
    ...mapGetters(['cartItemCount'])
  }
}
</script>

<style lang="scss" scoped>
</style>
