<template>
  <h1>Create tables</h1>
  <div class="table-count">
    <div class="title">Table Count:</div>
    <input type="text" v-modal="tableCount">
  </div>
  <div class="seats">
    <div class="title">Seats:</div>
    <ul>
      <li>
        <div>{{ tableCount }}</div>
        <input type="text">
      </li>
      
    </ul>
  </div>
  <button>Create seats</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      tableCount: '4',
      tableDetial: 
      [
        {
          seats: '',

        }
      ]
    }
  },
}
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

</style>
