import Vue from 'vue';
import Vuex from 'vuex';
import http from "@/api/http";
import createPersistedState from "vuex-persistedstate";
import userStore from "@/store/modules/userStore"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apts: [],
    sidocode: "",
    guguncode: "",
    dongcode: "",
    pgSize: 0,
    totalListSize: 0,
    start: 1,
    searchPgno: '',
    end: 10,
    aptname: '',
    pageList: [],
  },
  getters: {},
  mutations: {
    SET_APT_LIST(state, payload) {
      let searchData = payload.data;
      let search = payload.search;
      
      state.apts = searchData.houseList;
      state.sidocode = searchData.sidoCode;
      state.guguncode = searchData.gugunCode;
      state.dongcode = searchData.dongCode;
      state.pgSize = searchData.pgSize;
      state.totalListSize = searchData.totalListSize;
      state.aptname = search.word
    },
    SET_ONLY_APT_LIST(state, aptList) {
      state.apts = aptList
    },
    SET_PAGE_NUM(state, payload) {

      state.searchPgno = payload.page;
      state.start = payload.start;
      state.end = state.start + 10 < state.pgSize ? state.start + 10 : state.pgSize;
      state.pageList = [];

      var length = state.end - state.start + 1;
      length = length % 10 == 1 ? length - 1 : length;
      console.log(length, state.end, state.start);
      for (var i = 0, start = state.start; i < length; i++) {
        state.pageList[i] = start;
        start++;
      }
      console.log(state.pageList, state.pgSize);
    },
  },
  actions: {
    getAptData({ commit, }, search) {
      http
        .get(`/house?sido=${search.sido}&gugun=${search.gugun}&dong=${search.dong}&pgno=${search.searchPgno}&aptname=${search.word}`)
        .then(({ data }) => {
          commit("SET_APT_LIST", { data: data, search: search });
          commit('SET_PAGE_NUM', { start: 1, page:1 });
        })
        .catch((res) => {
          console.log(res);
        });
    },
    setStartEnd({ commit, }, page) {
      var start = Math.floor((page - 1) / 10) * 10 + 1;
      // let arg = { sido: this.state.sidocode, gugun: this.guguncode, dong: this.dongcode, pgno: this.searchPgno, word: this.word };
      commit('SET_PAGE_NUM', { page: page, start: start});
      http
          .get(`house?sido=${this.state.sidocode}&gugun=${this.state.guguncode}&dong=${this.state.dongcode}&pgNo=${this.state.searchPgno}&aptname=${this.state.aptname}`)
          .then(({ data }) => {
            commit("SET_ONLY_APT_LIST", data.houseList);
          })
          .catch((res) => {
            console.log(res);
          });
    },
    moveStartEnd({ commit }, plusOrMinus) {
      let newStart = this.state.start + plusOrMinus;
      let newEnd = this.state.end + plusOrMinus;

      commit("SET_PAGE_NUM", {page:this.state.searchPgno, start:newStart, end:newEnd})
    }
  },
  modules: {
    userStore,
  },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});
