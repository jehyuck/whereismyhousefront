<template>
  <div>
    <table class="table table-bordered">
      <tr>
        <th>제목</th>
        <td>
          <input type="text" id="title" ref="title" v-model="qna.title" />
        </td>
      </tr>
      <tr>
        <th>사용자</th>
        <td>
          <div id="userId" ref="userId">{{ qna.userId }}</div>
        </td>
      </tr>
      <tr>
        <th colspan="2">내용</th>
      </tr>
      <tr>
        <td colspan="2">
          <textarea id="content" cols="46" rows="10" ref="content" v-model="qna.content"></textarea>
        </td>
      </tr>
      <tr>
        <td>
          <button class="btn btn-primary" @click="registHandler">등록</button>
          <router-link :to="{ name: 'QNAListView' }">
            <button class="btn btn-primary">목록</button>
          </router-link>
        </td>
      </tr>
    </table>
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
