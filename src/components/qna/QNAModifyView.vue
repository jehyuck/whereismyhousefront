<template>
  <div>
    <div class="breadcrumbs my-2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">QNA Modify</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><router-link to="/">Home</router-link></li>
              <li>QNA Modify</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <table class="table table-bordered">
        <tr>
          <th>글 번호</th>
          <td>
            <div class="p-0 m-0" type="text" id="userId" ref="userId">{{ qna.qnaNo }}</div>
          </td>
        </tr>
        <tr>
          <th>제목</th>
          <td class="p-1 m-0">
            <div class="py-0 m-0">
              <input class="form-control" type="text" id="title" ref="title" v-model="qna.title" />
            </div>
          </td>
        </tr>
        <tr>
          <th>사용자</th>
          <td class="py-1 m-0">
            <div class="border border-gray rounded" type="text" id="userId" ref="userId">{{ qna.userId }}</div>
          </td>
        </tr>
        <tr>
          <th colspan="2">내용</th>
        </tr>
        <tr>
          <td colspan="2">
            <div class="p-0 m-0">
              <textarea class="form-control" id="content" cols="46" rows="10" ref="content" v-model="qna.content"></textarea>
            </div>
          </td>
        </tr>
        <tr v-if="qna.answer != undefined">
          <th colspan="2">답변내용</th>
        </tr>
        <tr v-if="qna.answer != undefined">
          <th colspan="2">
            <div v-text="qna.answer" class="border border-gray rounded m-2 text-left font-weight-normal" style="min-height: 200px"></div>
          </th>
        </tr>
        <tr v-else>
          <th colspan="2">답변이 아직 달리지 않았습니다.</th>
        </tr>
        <tr>
          <td colspan="2">
            <div style="display: inline-block">
              <button class="btn btn-primary" @click="updateHandler">수정</button>
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
          console.log(data);
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
