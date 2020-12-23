<template>
  <div v-if="bookingId!=null" class="booking-detail">
    <form action="#" v-if="!editMode" class="showForm">
      <label for="number">人數</label>
      <input type="number" id="number" :value="bookingDetail[bookingId].seats" disabled>
      <label for="name">姓名</label>
      <input type="text" id="name" :value="bookingDetail[bookingId].name" disabled>
      <label for="phone">電話</label>
      <input type="text" id="phone" :value="bookingDetail[bookingId].phone" disabled>
      <label for="time">時間</label>
      <input type="text" id="time" :value="bookingDetail[bookingId].time" disabled>

      <button class="edit" @click="enterEditMode">edit</button>
      <button class="close" @click="$emit('closeModal')">X</button>
    </form>
    

    <form action="#" v-if="editMode" class="inputForm">
      <label for="number">人數</label>
      <input type="number" id="number" v-model="bookingInfo.seats">
      <label for="name">姓名</label>
      <input type="text" id="name"  v-model="bookingInfo.name">
      <label for="phone">電話</label>
      <input type="text" id="phone"  v-model="bookingInfo.phone">
      <label for="time">時間</label>
      <input type="text" id="time"  v-model="bookingInfo.time">
      <button @click="$emit('bookingDone', bookingInfo); bookingDone()">Booking</button>
      <button class="close" @click="$emit('closeModal'); closeModal()">X</button>
    </form>
  </div>

</template>

<script>
export default {
  name: 'booking-modal',
  props: ['bookingId', 'bookingDetail'],
  emits:['bookingDone', 'closeModal'],
  data(){
    return {
      bookingInfo: {
        seats: null,
        name: null,
        phone: null,
        time: null,
      },
      editMode: false,
    };
  },
  methods: {
    bookingDone() {

      console.log(this.bookingDetail[this.bookingId].seats);
      this.closeModal();

    },
    closeModal() {

      this.bookingInfo = {
        seats: null,
        name: null,
        phone: null,
        time: null,
      };
      this.editMode = false;

    },
    enterEditMode(){
      
      this.editMode = true;
      this.bookingInfo = Object.assign({}, this.bookingDetail[this.bookingId]) ;
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

// .showForm {
//   display: none;
//   &.open {
//     display: flex;
//   }
// }

// .inputForm {
//   display: flex;
  
// }

</style>
