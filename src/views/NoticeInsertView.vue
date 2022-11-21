<template>
  <div class="about">
    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">Notice</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><a href="${root}/index">Home</a></li>
              <li>Notice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <section class="item-details section">
      <div class="container">
        <div class="top-area">
          <div class="row">
            <div class="mb-3" style="">
              <div class="m-auto">제목</div>
              <textarea rows="2" cols="130" v-model="notice.title"></textarea>
              <div class="mt-3 mb-1 border-bottom">작성자: {{ notice.author }} | 작성일: {{ notice.createdTime }}</div>
            </div>
            <div class="col-lg-12 col-md-12 col-12">
              <div class="m-auto">내용</div>
              <textarea rows="30" cols="150" v-model="notice.content"></textarea>
            </div>
          </div>
        </div>

        <div class="mt-3">
          <span class="button">
            <a class="btn m-2" @click="updateNotice">수정</a>
          </span>

          <span class="button">
            <router-link class="btn" :to="{ name: 'noticeList' }">back</router-link>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import http from '@/api/http';

export default {
  data() {
    return {
      noticeNo: String,
      notice: {
        noticeNo: '',
        title: '',
        author: '',
        content: '',
        createdTime: '',
      },
    };
  },
};
</script>
