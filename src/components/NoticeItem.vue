<template>
  <div class="single-item-list">
    <div class="row align-items-center">
      <div class="col-lg-2 col-md-2 col-12">
        <p>&nbsp;&nbsp;{{ notice.noticeNo }}</p>
      </div>
      <div class="col-lg-3 col-md-3 col-12">
        <p>{{ notice.title }}</p>
      </div>
      <div class="col-lg-2 col-md-2 col-12">
        <p>{{ notice.author }}</p>
      </div>
      <div class="col-lg-2 col-md-2 col-12">
        <p>{{ notice.createdTime }}</p>
      </div>

      <div class="col-lg-2 col-md-2 col-12 align-left">
        <ul class="action-btn">
          <li>
            <router-link :to="{ name: 'noticeDetail', query: { noticeNo: notice.noticeNo } }"><i class="lni lni-eye"></i></router-link>
          </li>
          <div v-if="true">
            <li>
              <router-link :to="{ name: 'noticeModify', query: { noticeNo: notice.noticeNo } }"><i class="lni lni-pencil"></i></router-link>
            </li>
            <li>
              <a @click="deleteNotice"><i class="lni lni-trash"></i></a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/api/http';
export default {
  name: 'noticeItem',
  props: {
    notice: {},
  },
  methods: {
    deleteNotice() {
      http.delete(`notice/${this.notice.noticeNo}`);
    },
  },
};
</script>

<style></style>
