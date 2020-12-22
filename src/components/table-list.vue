<template>
  <div class="table-list" v-if="$store.state.tableIsSet">
    <ul>
      <li v-for="(seat, index) in $store.state.seats" :key="index" @dblclick="openModal(index)">
        <template v-if="!$store.state.bookingDetails[index]">
          <p>0 / {{ seat }}</p>
        </template>
        <template v-if="$store.state.bookingDetails[index]">
          <p>{{ $store.state.bookingDetails[index].seats }} / {{ seat }}</p>
          <p>{{ $store.state.bookingDetails[index].name }} 先生/小姐</p>
          <p>{{ $store.state.bookingDetails[index].time }}</p>
        </template>
        
      </li>
    </ul>

    <booking-modal></booking-modal>
  </div>
</template>

<script>
import bookingModal from './booking-modal.vue'

export default {
  name: 'table-list',
  props: {
  },
  components: {
    bookingModal,
  },
  methods: {
    openModal(index) {
      this.$store.commit('recBookingId', index);
      this.$store.commit('openModal', index);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
