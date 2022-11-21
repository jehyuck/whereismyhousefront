<template>
  <div>
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
    <div>
      <b-table hover striped :items="qnas" :fields="fields" @row-clicked="goDetail"> </b-table>
    </div>
    <b-button v-if="this.userInfo.id && !['admin', 'ssafy'].includes(this.userInfo.id)" variant="primary" @click="registQNA">질문 등록 </b-button>
    <!-- <div v-else>등록된 책 목록이 없습니다.</div> -->
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
