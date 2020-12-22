<template>
  <h1>Create tables</h1>
  <div v-if="!tableIsSet" class="seats">
    <div class="table-count">
      <div class="title">Table Count:</div>
      <input type="number" v-model.number="tableCount" />
    </div>
    <div v-if="tableCount" class="title">
      Seats:
      <ul>
        <li v-for="(n, index) in tableCount" :key="index">
          <div>{{ n }}/ &nbsp;</div>
          <input type="number" v-model="seats[n-1]">
        </li>
      </ul>
    <button @click="setTable">Create seats</button>

    </div>
  </div>

  <div class="table-list" v-if="tableIsSet">
    <ul>
      <li v-for="(seat, index) in seats" :key="index" @dblclick="openModal(index)">
        <template v-if="!this.bookingDetails[index]">
          <p>0 / {{ seat }}</p>
        </template>
        <template v-if="this.bookingDetails[index]">
          <p>{{ this.bookingDetails[index].seats }} / {{ seat }}</p>
          <p>{{ this.bookingDetails[index].name }} 先生/小姐</p>
          <p>{{ this.bookingDetails[index].time }}</p>
        </template>
        
      </li>
    </ul>

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
  </div>

  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      tableCount: null,
      tableIsSet: false,
      showDetail: false,
      seats: [],
      bookingId: null,
      bookingDetail: {
        seats: null,
        name: null,
        phone: null,
        time: null,
      },

      bookingDetails: [],
    };
  },
  methods: {
    setTable(){
      this.tableIsSet = true;
    },
    openModal(index){
      this.bookingId = index;
      if (!this.bookingDetails[index]) {
        this.bookingDetails = {
          seats: null,
          name: null,
          phone: null,
          time: null,
        };
      } else {
        this.bookingDetail = Object.assign({}, this.bookingDetails[index]);
      }
    },
    bookingDone(){
      this.bookingDetails[this.bookingId] = Object.assign({}, this.bookingDetail);
      this.bookingId = null;
      this.bookingDetail =  [];
    },
    cancelBooking(){
      this.bookingId = null;
      this.bookingDetail =  [];
    }
    
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-align: center;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

h1 {
  margin-bottom: 30px;
  font-weight: 800;
}

.title {
  font-weight: 800;
}

.table-count {
  margin-bottom: 30px;
}

.table-list {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  ul {
    display: flex;
    li {
      display: flex;
      flex-direction: column;
      padding: 30px;
      margin: 0 10px;
      border: 1px solid #000;
      border-radius: 5px;
    }
  }
}

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
