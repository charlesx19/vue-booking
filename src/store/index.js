import { createStore } from 'vuex'

export default createStore({
  state: {
    // tableCount: null,
    tableIsSet: false,
    // showDetail: false,
    seats: [],
    // bookingId: null,

    // bookingDetail: {},
    // bookingDetails: [],
  },
  mutations: {
    setTable(state){
      state.tableIsSet = true;
    },
    recBookingId(state, id) {
      state.bookingId = id;
    },
    openModal(state, index) {
      if (!state.bookingDetails[index]) {
        state.bookingDetail = {
          seats: null,
          name: null,
          phone: null,
          time: null,
        }
      } else {
        state.bookingDetail = Object.assign({}, state.bookingDetails[index]);
      }
    },
    bookingDone(state) {
      state.bookingDetails[state.bookingId] = Object.assign({}, state.bookingDetail);
    },
    cancelBooking(state) {
      state.bookingId = null;
      state.bookingDetail = {
        seats: null,
        name: null,
        phone: null,
        time: null,
      };
    },
    addTable(state, data) {
      state.seats[state.seats.length] = data;
    },
    deleteItem(state, index) {
      state.seats.splice(index, 1);
    },
  },
  actions: {
  },
  modules: {
  }
})
