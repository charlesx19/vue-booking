<template>
  <h1>Create tables</h1>
  <div class="table-count">
    <div class="title">Table Count:</div>
    <input type="number" v-model.number="tableCount" />
  </div>
  <div v-if="!tableIsSet" class="seats" :class="{ active: tableIsSet }">
    <div class="title">Seats:</div>
    <ul>
      <li v-for="(n, index) in tableCount" :key="index">
        <div>{{ n }}/ &nbsp;</div>
        <input type="number" v-model="seats[n-1]">
      </li>
    </ul>
    <button @click="setTable">Create seats</button>
  </div>

  <div class="table-list" v-if="tableIsSet">
    <ul>
      <li v-for="(n, index) in tableCount" :key="index" @dblclick="booking">
        0/{{ seats[n-1] }}
      </li>
    </ul>
  </div>

  <div class="booking-detail">
    <form action="#">
      <label for="number">人數</label>
      <input type="number" id="number">
      <label for="name">姓名</label>
      <input type="text" id="name">
      <label for="phone">電話</label>
      <input type="text" id="phone">
      <label for="time">時間</label>
      <input type="text" id="time">
    </form>
    <button @click="bookingDone">Booking</button>
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
      tableCount: 0,
      tableIsSet: false,
      seats: [],
    };
  },
  methods: {
    setTable(){
      this.tableIsSet = true;
    },
    booking(){

    },
    bookingDone(){
      
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
      padding: 30px;
      margin: 0 10px;
      border: 1px solid #000;
      border-radius: 5px;
    }
  }
}

.booking-detail {
  position: absolute;
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
}
</style>
