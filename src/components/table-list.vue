<template>
  <div class="table-list" v-if="$store.state.tableIsSet">
    <ul>
      <li v-for="(seat, index) in $store.state.seats" :key="index" @dblclick="openModal(index)">
        <template v-if="!bookingDetails[index]">
          <p>0 / {{ $store.state.seats[index] }}</p>
        </template>
        <template v-if="bookingDetails[index]">
          <p>{{ bookingDetails[index].name }} 先生/小姐</p>
          <p>電話 {{ bookingDetails[index].phone }} </p>
          <p>{{ bookingDetails[index].seats }} / {{ seat }} 位</p>
          <p>時間 {{ bookingDetails[index].time }}</p>
        </template>
        
      </li>
    </ul>

    <booking-modal :bookingId="bookingId" :bookingDetail="bookingDetails" @closeModal="bookingId = null" @bookingDone="bookingDone"></booking-modal>
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

      if (!this.bookingDetails[this.bookingId]) {
        this.bookingDetails[this.bookingId] = {
          seats: 0,
          name: null,
          phone: null,
          time: null,
        };
      }
    },
    bookingDone(bookingInfo) {
      if (((bookingInfo.seats) && (bookingInfo.name) && (bookingInfo.phone) && (bookingInfo.time))) {
        this.bookingDetails[this.bookingId] = Object.assign({}, bookingInfo);
      }

      console.log(Boolean(bookingInfo.seats && bookingInfo.name && bookingInfo.phone && bookingInfo.time));
      this.bookingId = null;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
