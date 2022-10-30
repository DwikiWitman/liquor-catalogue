<template>
  <main class="container cart">
    <h2>Your Cart</h2>
    <AppEmptyCart />
    <table v-if="cart.length">
      <thead>
        <tr>
          <th>Item</th>
          <th>Amount</th>
          <th>Sub Price</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <td>
            {{ item.item.strDrink }}
          </td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.item.idDrink }}</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td class="total">Total: Rp. {{  cartTotal.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AppEmptyCart from '@/components/AppEmptyCart'

export default {
  components: {
    AppEmptyCart
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotal'])
  }
}
</script>

<style scoped>

</style>
