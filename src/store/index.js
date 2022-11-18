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
    pageList:[1,2,3,4,5,6,7,8,9,10],
  },
  getters: {},
  mutations: {
    SET_APT_LIST(state, dataa, search) {
      console.log(search);
      state.apts = dataa.houseList;
      state.sidocode = dataa.sidoCode;
      state.guguncode = dataa.gugunCode;
      state.dongcode = dataa.dongCode;
      state.pgSize = dataa.pgSize;
      state.totalListSize = dataa.totalListSize;
      // state.aptname = search.aptname
    },
    SET_PAGE_NUM(state, page, start, end) {

      state.searchPgno = page;
      state.start = start;
      state.end = end;
      this.pageList = [];

      var length = end - start;

      for (var i = 0; i <= length; i++) {
        this.pageList[i] = start;
        start++;
      }
    },
  },
  actions: {
    getAptData({ commit, }, search) {
        http
          .get(`/house?sido=${search.sido}&gugun=${search.gugun}&dong=${search.dong}&pgno=${search.searchPgno}&aptname=${search.word}`)
          .then(({ data }) => {
            console.log(data);
            commit("SET_APT_LIST", data, search);
          })
          .catch((res) => {
            console.log(res);
          });
    },
    setStartEnd({ commit, }, page, totalListSize) {
      var start = (page / 10) * 10;
      let arg = { sido: this.sidocode, gugun: this.guguncode, dong: this.dongcode, pgno: this.searchPgno, word: this.word };
      console.log(arg)
      commit('SET_PAGE_NUM', page, start, start < totalListSize ? start : totalListSize);
      console.log({ sido: this.sidocode, gugun: this.guguncode, dong: this.dongcode, pgno: this.searchPgno, word: this.word });
      http
          .get(`/house?sido=${this.sidoCode}&gugun=${this.gugunCode}&dong=${this.dongcode}&pgno=${this.searchPgno}&aptname=${this.word}`)
          .then(({ data }) => {
            console.log(data);
            commit("SET_APT_LIST", data, arg);
          })
          .catch((res) => {
            console.log(res);
          });
      // this.getAptData({ sido: this.sidoCode, gugun: this.gugunCode, dong: this.dongCode, pgno: this.searchPgno, word: this.word })
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
