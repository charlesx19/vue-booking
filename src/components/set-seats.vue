<template>
  <div v-if="tableCount" class="title">
    Seats:
    <ul>
      <li v-for="(n, index) in tableCount" :key="index">
        <div>{{ n }}/ &nbsp;</div>
        <input type="number" v-model="$store.state.seats[n-1]">
      </li>
    </ul>
    <button @click="setTable">Create seats</button>

  </div>
</template>

<script>
export default {
  name: 'set-seats',
  props: ['tableCount'],
  data() {
    return {
      
    };
  },
  methods: {
    setTable(){
      this.$store.commit('setTable');
      // console.log(this.$store.state.bookingDetail);
    },
    
  },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
