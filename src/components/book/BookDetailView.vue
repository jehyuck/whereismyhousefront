<template>
  <div>
    <table class="table table-bordered">
      <tr>
        <th>책 번호</th>
        <td v-text="book.isbn"></td>
      </tr>
      <tr>
        <th>제목</th>
        <td v-text="book.title"></td>
      </tr>
      <tr>
        <th>저자</th>
        <td v-text="book.author"></td>
      </tr>
      <tr>
        <th>가격</th>
        <td v-text="book.price"></td>
      </tr>
      <tr>
        <th colspan="2">책 정보</th>
      </tr>
      <tr>
        <th colspan="2"><pre v-text="book.describ"></pre></th>
      </tr>
      <tr>
        <td colspan="2">
          <b-button variant="primary m-2" @click="moveHandler">목록</b-button>
          <router-link :to="{ name: 'BookModifyView', query: { isbn: book.isbn } }">
            <b-button variant="primary m-2">수정</b-button>
          </router-link>
          <b-button variant="primary m-2" @click="removeHandler">삭제</b-button>
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
      isbn: '',
      book: {},
    };
  },
  created() {
    //DOM객체와 연결되었고 Vue의 속성들도 초기화 된 상태
    this.isbn = this.$route.query.isbn;
    console.log('view.html..................isbn]', this.isbn);
    http
      .get(`book/${this.isbn}`)
      .then(({ data }) => {
        this.book = data;
      })
      .catch(({ data }) => {
        alert(data);
      });
  },
  methods: {
    moveHandler() {
      this.$router.push({ name: 'BookListView' });
    },
    removeHandler() {
      console.log('view.html..................삭제]', this.isbn);
      http
        .delete(`book?isbn=${this.isbn}`)
        .then(({ data }) => {
          if (data == 'success') {
            alert('수정성공');
            this.moveHandler();
          }
        })
        .catch(({ data }) => {
          alert(data);
        });
    },
  },
};
</script>

<style></style>
