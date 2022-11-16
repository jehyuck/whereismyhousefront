<template>
  <div>
    <table class="table table-bordered">
      <tr>
        <th>게시글 번호</th>
        <td>
          <div type="text" id="userId" ref="userId">{{ qna.qnaNo }}</div>
        </td>
      </tr>
      <tr>
        <th>제목</th>
        <td>
          <input type="text" id="title" ref="title" v-model="qna.title" />
        </td>
      </tr>
      <tr>
        <th>사용자</th>
        <td>
          <div type="text" id="userId" ref="userId">{{ qna.userId }}</div>
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
      <tr v-if="qna.answer == undefined">
        <th colspan="2">답변이 아직 달리지 않았습니다.</th>
      </tr>
      <div v-else>
        <tr>
          <th colspan="2">답변내용</th>
        </tr>
        <tr>
          <th colspan="2"><div v-text="qna.answer"></div></th>
        </tr>
      </div>
      <tr>
        <td>
          <button class="btn btn-primary" @click="updateHandler">수정</button>
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

export default {
  data() {
    return {
      qnaNo: '',
      qna: {
        qnaNo: '',
        title: '',
        userId: '',
        price: '',
        content: '',
      },
    };
  },
  created() {
    //DOM객체와 연결되었고 Vue의 속성들도 초기화 된 상태
    this.qnaNo = this.$route.query.qnaNo;
    console.log('view.html..................qnaNo]', this.qnaNo);
    http.get(`/qna/${this.qnaNo}`).then(({ data }) => {
      this.qna = data;
    });
    // .catch(({ data }) => {
    //   alert(data);
    // });
  },

  methods: {
    moveHandler() {
      this.$router.push({
        name: 'QNAListView',
        query: { qnaNo: this.qna.qnaNo },
      });
    },
    updateHandler() {
      //데이타 검증
      let err = false;
      let msg = '';
      !this.qna.qnaNo && ((msg = '책 번호를 입력해주세요'), (err = true), this.$refs.qnaNo.focus());
      !err & !this.qna.title && ((msg = '책 제목을 입력해주세요'), (err = true), this.$refs.title.focus());
      !err & !this.qna.content && ((msg = '책 제목을 입력해주세요'), (err = true), this.$refs.content.focus());
      if (err) {
        alert(msg);
      } else {
        //수정하기
        http.put('/qna', this.qna).then(({ data }) => {
          if (data == 'success') {
            alert('수정성공');
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
