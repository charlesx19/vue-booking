import { createStore } from 'vuex'

export default createStore({
  state: {
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
  },
  mutations: {
    setTable(state){
      state.tableIsSet = true;
    },
  },
  actions: {
  },
  modules: {
  }
})
