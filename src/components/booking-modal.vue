<template>
  <div v-if="bookingId!=null" class="booking-detail">
    <form action="#">
      <label for="number">人數</label>
      <input type="number" id="number" v-model="bookingDetail.seats">
      <label for="name">姓名</label>
      <input type="text" id="name" v-model="bookingDetail.name">
      <label for="phone">電話</label>
      <input type="text" id="phone" v-model="bookingDetail.phone">
      <label for="time">時間</label>
      <input type="text" id="time" v-model="bookingDetail.time">
    </form>
    <button @click="bookingDone(index)">Booking</button>
    <button class="close" @click="cancelBooking()">X</button>
  </div>
</template>

<script>
export default {
  name: 'booking-modal',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
