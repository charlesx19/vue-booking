<template>
  <div class="seats">
    <div class="table-count">
      <div class="title">Table Count:</div>
      <input type="number" v-model.number="tableCount">
    </div>
    <set-seats :tableCount="tableCount"></set-seats>
  </div>
</template>

<script>
import setSeats from './set-seats.vue'

export default {
  name: 'set-tables',
  props: {
  },
  data() {
    return {
      tableCount: null,
    };
  },
  components: {
    setSeats,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
