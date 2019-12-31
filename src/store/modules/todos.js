/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios'

const state = {
    todos: [
        {
            id: 1,
            title: "Todo One"
        },
        {
            id: 2,
            title: "Todo Two"
        },
        {
            id: 3,
            title: "Todo Three"
        }
    ],
    currentTodos: [
        {
            id: 1,
            title: "Todo One"
        },
        {
            id: 2,
            title: "Todo Two"
        },
        {
            id: 3,
            title: "Todo Three"
        }
    ]
}

const getters = {
    allTodos: (state) => state.todos,
    shownTodos: (state) => state.currentTodos
}

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data)
    },
    async addTodo({ commit }, title) {
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos', 
            { title, completed: false}
        )
        commit('newTodo', response.data)
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('removeTodo', id)
    },
    filterTodos({ commit, state }, e) {
        const todos = state.todos.slice(0, e.target.value)
        commit('filterTodos', todos)
    },
    searchTodos({ commit, state }, searchTerm) {
        const todos = state.todos.filter(todo => todo.title.includes(searchTerm))
        commit('filterTodos', todos)
    }

}

const mutations = {
    setTodos: (state, todos) => {
        state.todos = todos
        state.currentTodos = todos
    },
    newTodo: (state, todo) => {
        state.todos.unshift(todo)
        state.currentTodos.unshift(todo)
    },
    removeTodo: (state, id) => {
        state.todos = state.todos.filter(todo => todo.id !== id)
        state.currentTodos = state.currentTodos.filter(todo => todo.id !== id)
    },
    filterTodos: (state, todos) => state.currentTodos = todos
}

export default {
    state, 
    getters, 
    actions, 
    mutations
}