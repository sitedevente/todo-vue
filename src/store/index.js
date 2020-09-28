import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        title: "Wash the dishes",
      },
      {
        title: "Swipe the floor",
      },
      {
        title: "Call a dentist",
      },
      {
        title: "Finish watching react ( and end up Redux ) courses",
      },
    ],
    done: [],
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks = [
        task,
        ...state.tasks
      ];

      console.log('add task mutation ', task);
    },
    MARK_AS_DONE(state, task) {
      state.done = [
        task,
        ...state.done
      ];

      console.log('task has been finished ', task);
    },
    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1)

      console.log('delete task mutation ', index);
    }

  },
  actions: {
    addTask({ commit }, task) {
      commit('ADD_TASK', task)
    },
    markAsDone({ commit }, { index, task }) {
      commit('DELETE_TASK', index)
      commit('MARK_AS_DONE', task)
    },
    deleteTask({ commit }, index) {
      commit('DELETE_TASK', index)
    }
  },
  modules: {
  }
})
