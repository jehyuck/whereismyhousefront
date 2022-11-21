<template>
  <div>
    <table class="table table-bordered">
      <tr>
        <th colspan="2">답변 내용</th>
      </tr>
      <tr>
        <td colspan="2">
          <div>
            <textarea id="content" cols="70" rows="10" ref="answer" v-model="qna.answer"></textarea>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div>
            <button class="btn btn-primary m-2" @click="registHandler">등록</button>
            <router-link :to="{ name: 'QNAListView' }">
              <button class="btn btn-primary">목록</button>
            </router-link>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import http from '@/api/http';

export default {
  props: ['propsAnswer'],
  data() {
    return {
      qna: {
        qnaNo: '',
        title: '',
        userId: '',
        price: '',
        content: '',
        answer: this.propsAnswer,
      },
    };
  },
  created() {
    //DOM객체와 연결되었고 Vue의 속성들도 초기화 된 상태
    this.qna.answer = this.propsAnswer;
    console.log(this.propsQnaNo, this.$route.query.qnaNo);
    this.qna.qnaNo = this.$route.query.qnaNo;
    console.log('view.html..................qnaNo]', this.propsAnswer);
  },
  methods: {
    moveHandler() {
      this.$router.push({
        name: 'QNAListView',
      });
    },
    registHandler() {
      //데이타 검증
      let err = false;
      let msg = '';
      !this.qna.answer && ((msg = '제목을 입력해주세요'), (err = true), this.$refs.answer.focus());
      if (err) {
        alert(msg);
      } else {
        //수정하기
        console.log({ qnaNo: this.qna.qnaNo, answer: this.qna.answer });
        http.put('/qna/answer', { qnaNo: this.qna.qnaNo, answer: this.qna.answer }).then(({ data }) => {
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
