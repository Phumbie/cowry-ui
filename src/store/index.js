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
    searchPictures: [],
    searching: false,
  },
  mutations: {
    SET_LOADING(state, val) {
      state.loading = val;
    },
    GET_ALL_PICTURES(state, val) {
      state.pictures = val;
      // console.log(val);
    },
    SHOW_MODAL(state, val) {
      state.showModal = val;
    },
    DISPLAY_INFO(state, val) {
      // console.log(val);
      state.showInfo = val;
    },
    GET_SEARCH_PICTURES(state, val) {
      state.searchPictures = val;
    },
    EMPTY_PICTURES(state) {
      state.searchPictures = [];
    },
    SEARCHING(state, val) {
      state.searching = val;
    },
  },
  actions: {
    getAllPictures({ commit }, search) {
      commit("SET_LOADING", true);
      api
        .getPictures(search)
        .then(({ data }) => {
          // console.log(data);
          if (data.results) {
            commit("GET_ALL_PICTURES", data.results);
          } else {
            commit("GET_ALL_PICTURES", data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSearchPictures({ commit }, search) {
      // console.log(search);
      commit("SET_LOADING", true);
      commit("SEARCHING", true);

      api
        .getSearchPictures(search)
        .then(({ data }) => {
          commit("GET_SEARCH_PICTURES", data.results);
          commit("SEARCHING", false);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
