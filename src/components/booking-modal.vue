<template>
  <div v-if="bookingId!=null" class="booking-detail">
    <!-- <form action="#" v-if="!editMode" class="showForm">
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
    </form> -->
    

    <form action="#" v-if="editMode" class="inputForm">
      <label for="number">人數</label>
      <input type="number" id="number" v-model="bookingInfo.seats" required>
      <label for="name">姓名</label>
      <input type="text" id="name"  v-model="bookingInfo.name" required>
      <label for="phone">電話</label>
      <input type="text" id="phone"  v-model="bookingInfo.phone" required>
      <label for="time">時間</label>
      <input type="text" id="time"  v-model="bookingInfo.time" required>
      <button @click="$emit('bookingDone', bookingInfo); bookingDone()">Booking</button>
      <button class="close" @click="$emit('closeModal'); closeModal()">X</button>
    </form>
  </div>

</template>

<script>
export default {
  name: 'booking-modal',
  props: ['bookingId', 'bookingDetail', 'editMode'],
  emits:['bookingDone', 'closeModal'],
  data(){
    return {
      bookingInfo: {
        seats: null,
        name: null,
        phone: null,
        time: null,
      },
    };
  },
  methods: {
    bookingDone() {
      if (!this.bookingInfo.seats){
        alert('請輸入訂位座位數量')
      } else if (!this.bookingInfo.name){
        alert('請輸入姓名')
      } else if (!this.bookingInfo.phone){
        alert('請輸入連絡電話')
      } else if (!this.bookingInfo.time){
        alert('請輸入訂位時間')
      } else {
        this.closeModal();
      }

      // console.log(this.bookingDetail[this.bookingId].seats);
    },
    closeModal() {

      this.bookingInfo = {
        seats: null,
        name: null,
        phone: null,
        time: null,
      };

    },
    enterEditMode(){
      this.bookingInfo = Object.assign({}, this.bookingDetail[this.bookingId]) ;
      if (this.bookingInfo.seats == 0) {
        this.bookingInfo.seats = null
      }
    },
  },
  watch: {
    bookingId: function() {
      this.enterEditMode();
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

  .booking-detail {
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 50px;
    border: 1px solid #000;
    border-radius: 10px;
    background: #eee;

    form {
      display: flex;
      flex-direction: column;
      * {
        text-align: left;
      }
    }
    button {
      margin-top: 10px;
    }
    .close {
      position: absolute;
      width: 20px;
      height: 20px;
      right: 10px;
      top: 5px;
      border: none;
      border-radius: 50%;
      font-size: 18px;
      cursor: pointer;
    }
  }

</style>
