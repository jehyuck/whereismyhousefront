<template>
  <!-- 검색 창 -->
  <div class="">
    <div class="container">
      <div class="row align-items-center">
        <!-- Start Search Form -->
        <form action="${root}/house/search" id="searchForm">
          <div class="search-form wow" data-wow-delay=".7s">
            <div class="row mt-2">
              <div class="col-lg-2 col-md-2 col-12 p-0">
                <div class="search-input">
                  <label for="sido"><i class="lni lni-map-marker theme-color"></i></label>
                  <select name="sido" id="sido" @change="setGuGun" v-model="sido">
                    <option v-for="(sidoitem, index) in sidoList" :key="index" :value="sidoitem.value">{{ sidoitem.name }}</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-12 p-0">
                <div class="search-input">
                  <label for="gugun"><i class="lni lni-map-marker theme-color"></i></label>
                  <select name="gugun" id="gugun" @change="setDong" v-model="gugun">
                    <option v-for="(gugunitem, index) in gugunList" :key="index" :value="gugunitem.value">{{ gugunitem.name }}</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-12 p-0">
                <div class="search-input">
                  <label for="dong"><i class="lni lni-map-marker theme-color"></i></label>
                  <select name="dong" id="dong" v-model="dong">
                    <option v-for="(dongitem, index) in dongList" :key="index" :value="dongitem.value">{{ dongitem.name }}</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-12 p-0">
                <div class="search-input">
                  <label for="dong"><i class="lni lni-map-marker theme-color"></i></label>
                  <input type="text" name="aptName" id="aptName" />
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-12 p-0 search-btn button">
                <button class="btn" type="submit" form="searchForm"><i class="lni lni-search-alt"></i> Search</button>
              </div>
            </div>
          </div>
        </form>
        <!-- End Search Form -->
      </div>
    </div>
  </div>
  <!-- 검색 창 -->
</template>

<script>
import axios from 'axios';
export default {
  name: 'searchBox',
  data() {
    return {
      sido: '',
      gugun: '',
      dong: '',
      sidoList: [{ name: '도/광역시', value: '' }],
      gugunList: [{ name: '시/구/군', value: '' }],
      dongList: [{ name: '동', value: '' }],
    };
  },
  created() {
    this.sendRequest('sido', '*00000000');
  },

  methods: {
    setSido(dataa, sido) {
      dataa.regcodes.forEach(function (regcode) {
        sido.push({ name: regcode.name, value: regcode.code });
      });
    },
    setGuGun() {
      this.initGuGun();
      this.sendRequest('gugun', this.sido.substr(0, 2) + this.sido);
      console.log(this.sidoList);
    },
    setDong() {
      return '';
    },
    initGuGun() {
      this.gugunList = [{ name: '시/구/군', value: '' }];
    },
    initDong() {
      this.dongList = [{ name: '동', value: '' }];
    },
    sendRequest(selid, regcode) {
      const url = 'https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes';
      let params = 'regcode_pattern=' + regcode + '&is_ignore_zero=true';
      console.log(params);
      axios(`${url}?${params}`).then(({ data }) => {
        switch (selid) {
          case 'sido':
            this.setSido(data, this.sidoList);
            break;
          case 'gugun':
            this.setSido(data, this.gugunList);
        }
      });
    },
  },
};
</script>

<style></style>
