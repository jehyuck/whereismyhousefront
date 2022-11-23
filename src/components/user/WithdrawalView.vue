<template>
  <div>
    <div class="preloader" style="opacity: 0; display: none">
      <div class="preloader-inner">
        <div class="preloader-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">회원 탈퇴</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>Close Account</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <section class="dashboard section">
      <div class="container">
        <div class="row">
          <!-- 사이드바 -->
          <div class="col-lg-3 col-md-4 col-12">
            <div class="dashboard-sidebar">
              <div class="user-image">
                <img src="@/assets/images/items-grid/author-1.jpg" alt="#" />
                <h3>
                  {{ userInfo.name }}
                  <span
                    ><a href="javascript:void(0)">@{{ userInfo.id }}</a></span
                  >
                </h3>
              </div>
              <div class="dashboard-menu">
                <ul>
                  <li>
                    <router-link :to="{ name: 'mypage' }"><i class="lni lni-pencil-alt"></i>회원정보 조회/수정</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Bookmark' }"> <i class="lni lni-bookmark"></i>관심 지역 조회 </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'withdrawal' }" class="active"><i class="lni lni-trash"></i>회원 탈퇴</router-link>
                  </li>
                </ul>
                <div class="button">
                  <a class="btn" @click="logoutHandler">Logout</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 사이드바 END -->

          <!-- 회원 탈퇴 -->
          <div class="col-lg-9 col-md-8 col-12">
            <div class="main-content">
              <div class="dashboard-block close-content mt-0">
                <h2>회원 탈퇴</h2>
                <h4>이 작업은 되돌릴 수 없습니다. 정말 회원탈퇴 하시겠습니까?</h4>
                <div class="button">
                  <button class="btn" @click="withdrawalHandler" type="submit">탈퇴</button>
                  <router-link :to="{ name: 'mypage' }" class="btn btn-alt">취소</router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- 회원 탈퇴 END -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import http from '@/api/http';

import { mapState, mapActions } from 'vuex';
const userStore = 'userStore';

export default {
  computed: {
    ...mapState(userStore, ['userInfo']),
  },
  methods: {
    ...mapActions(userStore, ['userLogout']),
    moveHandler() {
      this.$router.push({
        name: 'home',
      });
    },
    withdrawalHandler() {
      http.delete(`user/remove/${this.userInfo.id}`).then(({ data }) => {
        if (data == 'success') {
          this.userLogout(this.userInfo.id);
          sessionStorage.removeItem('access-token'); //저장된 토큰 없애기
          sessionStorage.removeItem('refresh-token'); //저장된 토큰 없애기
          alert('회원탈퇴 완료');
          this.$router.push({ name: 'home' });
        } else {
          alert('다시 시도해주세요');
        }
      });
    },
    async logoutHandler() {
      sessionStorage.removeItem('access-token'); //저장된 토큰 없애기
      sessionStorage.removeItem('refresh-token'); //저장된 토큰 없애기
      await this.userLogout(this.userInfo.id);
      if (this.$route.path != '/') this.$router.push({ name: 'home' });
    },
  },
};
</script>
