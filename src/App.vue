<template>
  <h1>Create tables</h1>
  
  <set-tables v-if="!$store.state.tableIsSet"></set-tables>


  <table-list></table-list>

  
</template>

<script>
import setTables from './components/set-tables.vue'
import tableList from './components/table-list.vue'

export default {
  name: "App",
  components: {
    setTables,
    tableList,
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

</style>
