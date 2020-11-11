import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// U ovom primeru imamo samo baseUrl, koji setujemo kako bismo iz cele aplikacije
// znali na kojoj adresi nam je backend server
export default new Vuex.Store({
  state: {
    baseUrl: 'http://localhost/todofullstack/todo-backend'
  },
  mutations: {},
  actions: {},
  modules: {}
});
