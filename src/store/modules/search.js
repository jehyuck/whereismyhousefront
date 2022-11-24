import http from "@/api/http";

const searchStore = {
  namespaced: true,
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
      
      console.log("payload...........", payload);
      console.log("payload...........",searchData);
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
        console.log("search........",search);
        console.log("data........",data);
        commit("SET_APT_LIST", { data: data, search: search });
        commit('SET_PAGE_NUM', { start: 1, page:1 });
        })
        .catch((res) => {
          console.log(res);
        });
      },
      setStartEnd: function({ commit, state}, page) {
        var start = Math.floor((page - 1) / 10) * 10 + 1;
        // let arg = { sido: this.state.sidocode, gugun: this.guguncode, dong: this.dongcode, pgno: this.searchPgno, word: this.word };
        commit('SET_PAGE_NUM', { page: page, start: start });
        http
        .get(`house?sido=${state.sidocode}&gugun=${state.guguncode}&dong=${state.dongcode}&pgNo=${state.searchPgno}&aptname=${state.aptname}`)
          .then(({ data }) => {
            commit("SET_ONLY_APT_LIST", data.houseList);
          })
          .catch((res) => {
            console.log(res);
          });
    },
    moveStartEnd({ commit, state }, plusOrMinus) {
      let newStart = state.start + plusOrMinus;
      let newEnd = state.end + plusOrMinus;

      commit("SET_PAGE_NUM", {page:state.searchPgno, start:newStart, end:newEnd})
    }
  },
}

export default searchStore;