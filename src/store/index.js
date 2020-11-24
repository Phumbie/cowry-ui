import Vue from "vue";
import Vuex from "vuex";
import api from "../../utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    pictures: [],
    showModal: false,
    showInfo: "",
  },
  mutations: {
    SET_LOADING(state, val) {
      state.loading = val;
    },
    GET_ALL_PICTURES(state, val) {
      state.pictures = val;
      console.log(val);
    },
    SHOW_MODAL(state, val) {
      state.showModal = val;
    },
    DISPLAY_INFO(state, val) {
      console.log(val);
      state.showInfo = val;
    },
  },
  actions: {
    getAllPictures({ commit }, term) {
      commit("SET_LOADING", true);
      api
        .getPictures(term)
        .then(({ data }) => {
          commit("GET_ALL_PICTURES", data);
          // commit("SET_LOADING", false);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
