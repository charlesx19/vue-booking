<template>
  <h1>Create tables</h1>
  <div v-if="!$store.state.tableIsSet" class="seats">
    <set-tables></set-tables>
    <set-seats></set-seats>
  </div>

  <table-list></table-list>

  
</template>

<script>
import setTables from './components/set-tables.vue'
import setSeats from './components/set-seats.vue'
import tableList from './components/table-list.vue'

export default {
  name: "App",
  components: {
    setTables,
    setSeats,
    tableList,
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
