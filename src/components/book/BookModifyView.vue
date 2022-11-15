<template>
  <div>
    <table class="table table-bordered">
      <tr>
        <th>책 번호</th>
        <td><input type="text" id="isbn" ref="isbn" v-model="book.isbn" /></td>
      </tr>
      <tr>
        <th>제목</th>
        <td>
          <input type="text" id="title" ref="title" v-model="book.title" />
        </td>
      </tr>
      <tr>
        <th>저자</th>
        <td>
          <input type="text" id="author" ref="author" v-model="book.author" />
        </td>
      </tr>
      <tr>
        <th>가격</th>
        <td>
          <input type="text" id="price" ref="price" v-model="book.price" />
        </td>
      </tr>
      <tr>
        <th colspan="2">책 정보</th>
      </tr>
      <tr>
        <td colspan="2">
          <textarea id="describ" cols="46" rows="10" ref="describ" v-model="book.describ"></textarea>
        </td>
      </tr>
      <tr>
        <td>
          <button class="btn btn-primary" @click="updateHandler">수정</button>
          <router-link :to="{ name: 'BookListView' }">
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
      isbn: '',
      book: {
        isbn: '',
        title: '',
        author: '',
        price: '',
        describ: '',
      },
    };
  },
  created() {
    //DOM객체와 연결되었고 Vue의 속성들도 초기화 된 상태
    this.isbn = this.$route.query.isbn;
    console.log('view.html..................isbn]', this.isbn);
    http
      .get(`/book/${this.isbn}`)
      .then(({ data }) => {
        this.book = data;
      })
      .catch(({ data }) => {
        alert(data);
      });
  },

  methods: {
    updateHandler() {
      //데이타 검증
      let err = false;
      let msg = '';
      !this.book.isbn && ((msg = '책 번호를 입력해주세요'), (err = true), this.$refs.isbn.focus());
      !err & !this.book.title && ((msg = '책 제목을 입력해주세요'), (err = true), this.$refs.title.focus());
      !err & !this.book.author && ((msg = '책 제목을 입력해주세요'), (err = true), this.$refs.author.focus());
      !err & !this.book.price && ((msg = '책 제목을 입력해주세요'), (err = true), this.$refs.price.focus());
      if (err) {
        alert(msg);
      } else {
        //수정하기
        http
          .put('/book', this.book)
          .then(({ data }) => {
            if (data == 'success') {
              alert('수정성공');
              this.$router.push({
                name: 'BookDetailView',
                query: { isbn: this.book.isbn },
              });
            }
          })
          .catch(({ data }) => {
            alert(data);
          });
      }
    },
  },
};
</script>

<style></style>
