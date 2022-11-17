import Vue from 'vue';
import Vuex from 'vuex';
import http from "@/api/http";

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
    pgno: '',
    end: 10,
    aptname:'',
  },
  getters: {

  },
  mutations: {
    SET_APT_LIST(state, data, aptname) {
      state.apts = data.houseList;
      state.sidocode = data.sidoCode;
      state.guguncode = data.gugunCode;
      state.dongcode = data.dongCode;
      state.pgSize = data.pgSize;
      state.totalListSize = data.totalListSize;
      state.pgno = data.pgNo;
      state.aptname = aptname
    },
    SET_PAGE_NUM(state, page, start, end) {
      state.pgno = page;
      state.start = start;
      state.end = end;
    },
  },
  actions: {
    getAptData({ commit }, search) {
        http
          .get(`/house?sido=${search.sido}&gugun=${search.gugun}&dong=${search.dong}&pgno=${search.pgno}&aptname=${search.word}`)
          .then(({ data }) => {
            console.log(data);
            commit("SET_APT_LIST", data, search.aptname);
          })
          .catch((res) => {
            console.log(res);
          });
    },
    setStartEnd({ commit }, page, totalListSize) {
      var start = (page / 10) * 10;
      commit('SET_PAGE_NUM', page, start, start < totalListSize ? start : totalListSize);
      this.getAptData({ sido: this.sidocode, gugun: this.guguncode, dong: this.dongcode, pgno: page, aptname: this.aptname });
    }
  },
  modules: {},
});
