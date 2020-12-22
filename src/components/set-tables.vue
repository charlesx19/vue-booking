<template>
  <div class="table-count">
    <div class="title">Table Count:</div>
    <input type="number" v-model.number="$store.state.tableCount" />
  </div>
</template>

<script>
export default {
  name: 'set-tables',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
