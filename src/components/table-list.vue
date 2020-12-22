<template>
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

    <booking-modal></booking-modal>
  </div>
</template>

<script>
export default {
  name: 'table-list',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
