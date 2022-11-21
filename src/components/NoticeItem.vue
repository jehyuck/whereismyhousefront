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

      <div class="row col-lg-3 col-md-3 col-12 align-items-rihgt">
        <ul class="action-btn">
          <li>
            <router-link :to="{ name: 'noticeDetail', query: { noticeNo: notice.noticeNo } }"><i class="lni lni-eye"></i></router-link>
          </li>
          <li v-if="['admin', 'ssafy'].includes(this.userInfo.id)">
            <router-link :to="{ name: 'noticeModify', query: { noticeNo: notice.noticeNo } }"><i class="lni lni-pencil"></i></router-link>
          </li>
          <li v-if="['admin', 'ssafy'].includes(this.userInfo.id)">
            <a @click="deleteNotice"><i class="lni lni-trash"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/api/http';
import { mapState, mapGetters, mapActions } from 'vuex';
const userStore = 'userStore';

export default {
  name: 'noticeItem',
  props: {
    notice: {},
  },
  computed: {
    ...mapState(userStore, ['isLogin', 'userInfo']),
    ...mapGetters(['checkUserInfo']),
  },
  // created() {
  //   console.log(this.isLogin);
  //   if (!this.isLogin) {
  //     this.$router.push({ name: 'home' });
  //   }
  //   // console.log(this.userInfo);
  // },
  methods: {
    ...mapActions(userStore, ['userLogout']),
    deleteNotice() {
      http.delete(`notice/${this.notice.noticeNo}`).then(() => {
        // this.$router.push({ name: 'noticeList' });
        this.$router.push();
      });
    },
  },
};
</script>

<style></style>
