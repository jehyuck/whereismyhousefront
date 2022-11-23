<template>
  <div>
    <div class="about">
      <div class="breadcrumbs my-2">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="breadcrumbs-content">
                <h1 class="page-title">QNA detail</h1>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <ul class="breadcrumb-nav">
                <li><router-link to="/">Home</router-link></li>
                <li>QNA detail</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <table class="table table-bordered">
        <tr>
          <th>게시글 번호</th>
          <td v-text="qna.qnaNo"></td>
        </tr>
        <tr>
          <th>제목</th>
          <td v-text="qna.title"></td>
        </tr>
        <tr>
          <th>사용자</th>
          <td v-text="qna.userId"></td>
        </tr>
        <tr>
          <th colspan="2">내용</th>
        </tr>
        <tr>
          <th colspan="2"><pre v-text="qna.content"></pre></th>
        </tr>
        <tr v-if="qna.answer == undefined">
          <th colspan="2">답변이 아직 달리지 않았습니다.</th>
        </tr>
        <tr v-else>
          <th colspan="2">답변내용</th>
        </tr>
        <tr>
          <th colspan="2"><pre v-text="qna.answer"></pre></th>
        </tr>
        <tr>
          <td colspan="2">
            <div>
              <button class="btn btn-primary m-2" @click="moveHandler">목록</button>
              <router-link :to="{ name: 'QNAModifyView', query: { qnaNo: qna.qnaNo } }">
                <b-button v-if="qna.userId == this.userInfo.id" variant="primary m-2">수정</b-button>
              </router-link>
              <b-button v-if="qna.userId == this.userInfo.id || ['admin', 'ssafy'].includes(this.userInfo.id)" variant="primary m-2" @click="removeHandler">삭제</b-button>
            </div>
          </td>
        </tr>
      </table>
      <div>
        <AnswerRegistView v-if="qna.qnaNo != null && ['admin', 'ssafy'].includes(this.userInfo.id)" :propsAnswer="qna.answer"></AnswerRegistView>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/api/http';
import { mapState, mapGetters, mapActions } from 'vuex';
import AnswerRegistView from '@/components/qna/AnswerRegistView';
const userStore = 'userStore';

export default {
  data() {
    return {
      qnaNo: '',
      qna: {},
    };
  },
  computed: {
    ...mapState(userStore, ['isLogin', 'userInfo']),
    ...mapGetters(['checkUserInfo']),
  },
  components: {
    AnswerRegistView,
  },
  created() {
    //DOM객체와 연결되었고 Vue의 속성들도 초기화 된 상태
    this.qnaNo = this.$route.query.qnaNo;
    console.log('view.html..................qnaNo]', this.qnaNo);
    http.get(`qna/${this.qnaNo}`).then(({ data }) => {
      this.qna = data;
      console.log(sessionStorage.getItem('access-token'));
    });
  },
  methods: {
    ...mapActions(userStore, ['userLogout']),
    moveHandler() {
      this.$router.push({ name: 'QNAListView' });
    },
    removeHandler() {
      console.log('view.html..................삭제 qna]', this.qnaNo);
      http.delete(`qna/${this.qnaNo}`).then(({ data }) => {
        if (data == 'success') {
          alert('삭제성공');
          this.moveHandler();
        }
      });
    },
  },
};
</script>

<style></style>
