<template>
  <div class="table-list" v-if="$store.state.tableIsSet">
    <ul>
      <li class="table-list-item" v-for="(seat, index) in $store.state.seats" :key="index" @dblclick="openModal(index)">
        <div class="table-list-info">
          <template v-if="!bookingDetails[index]">
            <ul class="bookingInfo">
              <li><span class="title">訂位大名</span><span></span></li>
              <li><span class="title">連絡電話</span><span></span></li>
              <li><span class="title">座位資訊</span><span>0 / {{ seat }}位</span></li>
              <li><span class="title">訂位時間</span><span></span></li>
            </ul>
          </template>
          <template v-if="bookingDetails[index]">
            <ul class="bookingInfo">
              <li><span class="title">訂位大名</span><span>{{ bookingDetails[index].name }}</span></li>
              <li><span class="title">連絡電話</span><span>{{ bookingDetails[index].phone }}</span></li>
              <li><span class="title">座位資訊</span><span>{{ bookingDetails[index].seats }} / {{ seat }}位</span></li>
              <li><span class="title">訂位時間</span><span>{{ bookingDetails[index].time }}</span></li>
            </ul>
          </template>
          <button class="resetItem" @click="resetItem(index)">Reset</button>
          <!-- <button class="deleteItem" @click="deleteItem(index)">delete</button> -->
        </div>
      </li>
      <li class="table-list-item"><div class="table-list-info add-table" @click="addTable">+</div></li>
    </ul>

    <booking-modal :bookingId="bookingId" :bookingDetail="bookingDetails" :editMode="editMode" :addTableModal="addTableModal" @closeModal="closeModal" @bookingDone="bookingDone" @addTableDone="addTableDone"></booking-modal>
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
      editMode: false,
      addTableModal: false,
    };
  },
  components: {
    bookingModal,
  },
  methods: {
    openModal(index) {
      this.enterEditMode();
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
    closeModal() {
      this.bookingId = null;
      this.addTableModal = false;
    },
    bookingDone(bookingInfo) {
      if (((bookingInfo.seats) && (bookingInfo.name) && (bookingInfo.phone) && (bookingInfo.time))) {
        this.bookingDetails[this.bookingId] = Object.assign({}, bookingInfo);
        this.bookingId = null;
        this.editMode = false;
      }

      // console.log(Boolean(bookingInfo.seats && bookingInfo.name && bookingInfo.phone && bookingInfo.time));
    },
    addTableDone(bookingInfoForAdd) {
          this.bookingDetails[this.bookingDetails.length+1] = Object.assign({}, bookingInfoForAdd);
          this.bookingId = null;
          this.addTableModal = false;
        
    },
    enterEditMode() {
      this.editMode = true;
    },
    resetItem(index) {
     let result = confirm('Reset this booking?');
     if (result) {
       delete this.bookingDetails[index];
     }
    },
    deleteItem(index) {
      let result = confirm('Delete this booking?');
      if (result) {
        delete this.bookingDetails[index];
        this.$store.commit('deleteItem', index);
      }
    },
    addTable() {
      this.addTableModal = true;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .table-list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    ul {
      display: flex;
      width: 85%;
      justify-content: flex-start;
      flex-wrap: wrap;
      .table-list-item {
        position: relative;
        display: flex;
        width: 25%;
        min-width: 25%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 5px;
        user-select: none;
        // margin: 0 10px;
        // border: 1px solid #000;
        border-radius: 5px;
        .table-list-info {
          width: 100%;
          height: 174px;
          padding: 30px;
          border: 1px solid #000;
          cursor: pointer;
          &.add-table {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 48px;
            color: #555;
          }
        }
      }
    }
  }
  .resetItem {
    position: absolute;
    right: 15px;
    top: 10px;
    padding: 5px 5px;
    font-size: 12px;
    border: none;
    background: #eee;
    color: #555;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  .deleteItem {
    position: absolute;
    right: 60px;
    top: 10px;
    padding: 5px 5px;
    font-size: 12px;
    border: none;
    background: #eee;
    color: #555;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  
  .bookingInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    li {
      padding: 0;
      margin: 0;
      margin: 5px 0;
      display: flex;
      flex-direction: row;
      justify-content: start;
      border: none;
      span.title {
        margin-right: 10px;
        width: fit-content;
        flex-shrink: 0;
        font-size: 12px;
        border: 1px solid #000;
      }
      span {
        width: fit-content;
        font-size: 12px;
        text-align: right;
      }
    }
  }
</style>
