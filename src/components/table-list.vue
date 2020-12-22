<template>
  <div class="table-list" v-if="$store.state.tableIsSet">
    <ul>
      <li v-for="(seat, index) in $store.state.seats" :key="index" @dblclick="openModal(index)">
        <template v-if="!bookingDetails[index]">
          <p>0 / {{ $store.state.seats[index] }}</p>
        </template>
        <template v-if="bookingDetails[index]">
          <p>{{ bookingDetails[index].name }} 先生/小姐</p>
          <p>{{ bookingDetails[index].phone }} </p>
          <p>{{ bookingDetails[index].seats }} / {{ seat }}</p>
          <p>{{ bookingDetails[index].time }}</p>
        </template>
        
      </li>
    </ul>

    <booking-modal :bookingId="bookingId" :bookingDetail="bookingDetails"></booking-modal>
  </div>
</template>

<script>
import bookingModal from './booking-modal.vue'

export default {
  name: 'table-list',
  props: {
  },
  data() {
    return {
      bookingId: null,
      bookingDetail: {
        seats: null,
        name: null,
        phone: null,
        time: null,
      },
      bookingDetails: {
      },
    };
  },
  components: {
    bookingModal,
  },
  methods: {
    openModal(index) {
      this.bookingId = index;
      // this.$store.commit('openModal', index);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
