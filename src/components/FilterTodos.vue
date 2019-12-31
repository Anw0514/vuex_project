
<template>
  <div>
      <h3>Filter Todos:</h3>
      <select @change="filterTodos($event)">
          <option value="200">200</option>
          <option value="100">100</option>
          <option value="69">69</option>
          <option value="43">43</option>
          <option value="16">16</option>
          <option value="7">7</option>
      </select>
      <h3>Search Todos:</h3>
      <div class="form">
          <input @input="onChange" type="text" v-model="term" placeholder="Search Todos">
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "FilterTodos",
    data() {
      return {
        term: ''
      }
    },
    methods: {
        ...mapActions(['filterTodos', 'searchTodos']),
        onChange(e) {
          e.preventDefault() 
          this.searchTodos(this.term)
        }
    }
}
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
.form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>