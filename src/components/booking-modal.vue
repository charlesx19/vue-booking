<template>
  <div v-if="bookingId!=null" class="booking-detail">
    <form action="#">
      <label for="number">人數</label>
      <input type="number" id="number" :value="bookingDetail.seats">
      <label for="name">姓名</label>
      <input type="text" id="name" :value="bookingDetail.name">
      <label for="phone">電話</label>
      <input type="text" id="phone" :value="bookingDetail.phone">
      <label for="time">時間</label>
      <input type="text" id="time" :value="bookingDetail.time">
    </form>
    <button @click="bookingDone()">Booking</button>
    <button class="close" @click="cancelBooking()">X</button>
  </div>

</template>

<script>
export default {
  name: 'booking-modal',
  props: ['bookingId', 'bookingDetail'],
  data(){
    return {
      bookingDetails: {
        seats: null,
        name: null,
        phone: null,
        time: null,
      },
    };
  },
  methods: {
    bookingDone() {

      this.$store.commit('bookingDone');
      
      this.cancelBooking();
    },
    cancelBooking(){
      this.$store.commit('cancelBooking');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
