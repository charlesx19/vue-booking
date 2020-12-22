<template>
  <div v-if="$store.state.tableCount" class="title">
    Seats:
    <ul>
      <li v-for="(n, index) in $store.state.tableCount" :key="index">
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
  props: {

  },
  methods: {
    setTable(){
      this.$store.commit('setTable');
    },
  },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
