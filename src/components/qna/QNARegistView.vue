<template>
  <div>
    <div class="breadcrumbs my-2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">QNA Regist</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><router-link to="/">Home</router-link></li>
              <li>QNA Regist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <table class="table table-bordered text-align-center">
        <tr>
          <th class="my-auto text-center pb-0">제목</th>
          <td class="py-1">
            <div class="m-0 p-0">
              <input class="form-control p-0" type="text" id="title" ref="title" v-model="qna.title" />
            </div>
          </td>
        </tr>
        <tr>
          <th>사용자</th>
          <td class="py-1">
            <div id="userId" ref="userId" class="border border-gray rounded">{{ qna.userId }}</div>
          </td>
        </tr>
        <tr>
          <th colspan="2">내용</th>
        </tr>
        <tr>
          <td colspan="2">
            <div>
              <textarea id="content" class="form-control" style="width: 100%" rows="10" ref="content" v-model="qna.content"></textarea>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <div style="display: inline-block">
              <button class="btn btn-primary" @click="registHandler">등록</button>
            </div>
            <router-link :to="{ name: 'QNAListView' }">
              <button class="btn btn-primary">목록</button>
            </router-link>
          </td>
        </tr>
      </table>
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
      qna: {
        title: '',
        userId: '',
        price: '',
        content: '',
      },
    };
  },
  computed: {
    ...mapState(userStore, ['isLogin', 'userInfo']),
    ...mapGetters(['checkUserInfo']),
  },
  created() {
    //DOM객체와 연결되었고 Vue의 속성들도 초기화 된 상태
    this.qna.userId = this.userInfo.id;
    console.log('view.html..................qnaNo]', this.qnaNo);
  },

  methods: {
    ...mapActions(userStore, ['userLogout']),
    moveHandler() {
      this.$router.push({
        name: 'QNAListView',
      });
    },
    registHandler() {
      //데이타 검증
      let err = false;
      let msg = '';

      !this.qna.title && ((msg = '제목을 입력해주세요'), (err = true), this.$refs.title.focus());
      !err & !this.qna.content && ((msg = '내용을 입력해주세요'), (err = true), this.$refs.content.focus());
      if (err) {
        alert(msg);
      } else {
        //수정하기
        http.post('/qna', this.qna).then(({ data }) => {
          if (data == 'success') {
            alert('등록성공');
            this.moveHandler();
          }
        });
        // .catch(({ data }) => {
        //   alert(data);
        // });
      }
    },
  },
};
</script>

<style></style>
