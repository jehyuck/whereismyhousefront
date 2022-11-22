<template>
  <div>
    <div class="breadcrumbs my-2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">QNA List</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><router-link to="/">Home</router-link></li>
              <li>QNA List</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-2">
        <b-form-select class="form-control" v-model="key" :options="keys"> </b-form-select>
      </div>
      <div class="col-4">
        <b-form-input v-model="word" />
      </div>
      <div class="col-2">
        <b-button variant="primary" @click="searchQNA">검색 </b-button>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="container">
      <div class="border border-gray rounded mt-3">
        <b-table hover striped :items="qnas" :fields="fields" @row-clicked="goDetail"> </b-table>
      </div>
      <b-button class="mt-2" v-if="this.isLogin && this.userInfo.id && !['admin', 'ssafy'].includes(this.userInfo.id)" variant="primary" @click="registQNA">질문 등록 </b-button>
    </div>
  </div>
</template>

<script>
import http from '@/api/http';
import { mapState, mapGetters, mapActions } from 'vuex';
const userStore = 'userStore';

export default {
  data() {
    return {
      word: '',
      qnas: [],
      keys: [
        { value: 'all', text: '--선택하세요--' },
        { value: 'qnaNo', text: '게시글 번호' },
        { value: 'title', text: '제목' },
        { value: 'userId', text: '사용자' },
      ],
      fields: [
        { key: 'qnaNo', label: '게시글 번호' },
        { key: 'userId', label: '사용자' },
        { key: 'title', label: '제목' },
        { key: 'createdTime', label: '작성일' },
      ],
      key: 'all',
    };
  },
  computed: {
    ...mapState(userStore, ['isLogin', 'userInfo']),
    ...mapGetters(['checkUserInfo']),
  },
  created() {
    console.log(this.userInfo);
    this.searchQNA();
  },
  methods: {
    ...mapActions(userStore, ['userLogout']),
    searchQNA() {
      console.log('key.......', this.key);
      const url = `qna?key=${this.key}&pageNo=1&word=${this.word}`;
      http.get(url).then(({ data }) => {
        console.log('응답 데이타', data);
        this.qnas = data;
      });
    },
    goDetail(item) {
      console.log(item);
      this.$router.push({
        name: 'QNADetailView',
        query: { qnaNo: item.qnaNo },
      });
    },
    registQNA() {
      this.$router.push({
        name: 'QNARegistView',
      });
    },
  },
};
</script>

<style></style>
