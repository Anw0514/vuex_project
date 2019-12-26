<template>
  <div>
      Filter Todos:
      <select @change="filterTodos($event)">
          <option value="200">200</option>
          <option value="100">100</option>
          <option value="69">69</option>
          <option value="43">43</option>
          <option value="16">16</option>
          <option value="7">7</option>
      </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "FilterTodos",
    methods: {
        ...mapActions(['filterTodos'])
    }
}
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>