import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import AddTodo from './components/AddTodo.vue'
import FilterTodo from './components/FilterTodos.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/add', component: AddTodo},
  {path: '/filter', component: FilterTodo}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
