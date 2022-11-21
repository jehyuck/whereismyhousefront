<!-- <template>
  <nav class="navbar navbar-expand-sm bg-light">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/book">도서 관리</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">로그인</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/qna">qna</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template> -->

<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-12">
        <div class="nav-inner">
          <nav class="navbar navbar-expand-lg">
            <router-link class="navbar-brand" to="/"><img src="@/assets/images/logo/logo.svg" alt="Logo" /></router-link>
            <button
              class="navbar-toggler mobile-menu-btn"
              type="button"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
              <ul id="nav" class="navbar-nav ms-auto">
                <li class="nav-item">
                  <router-link class="active dd-menu collapsed" to="/" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    >Home</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="dd-menu collapsed"
                    to="/aptsearch"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu-1-4"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >Pages</router-link
                  >
                  <ul class="sub-menu collapse zz" id="submenu-1-4">
                    <ul class="zz">
                      <li class="nav-item zz"><router-link to="/aptsearch">검색</router-link></li>
                      <li class="nav-item zz"><router-link to="/about">홈페이지 소개</router-link></li>
                      <li class="nav-item zz"><router-link to="/noticelist">공지사항</router-link></li>
                      <li class="nav-item zz"><router-link to="/sitemap">사이트맵</router-link></li>
                    </ul>
                  </ul>
                </li>
                <!-- <c:if test="${not empty userInfo}"> -->
                <li class="nav-item">
                  <router-link
                    class="dd-menu collapsed"
                    to="/mypage"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu-1-5"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >My Page
                  </router-link>
                  <ul class="sub-menu collapse" id="submenu-1-5">
                    <li class="nav-item"><router-link :to="{ name: 'Bookmark' }">나의 관심 지역</router-link></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/qna">qna</router-link>
                </li>
                <!-- </c:if> -->
              </ul>
            </div>
            <!-- navbar collapse -->
            <div class="login-button">
              <ul>
                <div v-if="!userInfo">
                  <li>
                    <router-link to="/login"><i class="lni lni-enter"></i> 로그인</router-link>
                  </li>
                  <li>
                    <router-link to="/regist"><i class="lni lni-user"></i> 회원가입</router-link>
                  </li>
                </div>
                <div v-else>
                  <div v-if="userInfo.id == 'admin'">
                    <li>
                      <router-link to="/noticelist"><i class="lni lni-user"></i> 공지사항 관리</router-link>
                    </li>
                    <li>
                      <!-- <router-link to="/user/logout"><i class="lni lni-user"></i> 로그아웃</router-link> -->
                      <div @click.prevent="logoutHandler"><i class="lni lni-user"></i> 로그아웃</div>
                    </li>
                  </div>
                  <div v-else>
                    <li>
                      <router-link to="/mypage"><i class="lni lni-user"></i> 회원정보</router-link>
                    </li>
                    <li>
                      <!-- <router-link to="/user/logout"><i class="lni lni-user"></i> 로그아웃</router-link> -->
                      <div @click.prevent="logoutHandler"><i class="lni lni-user"></i> 로그아웃</div>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
          <!-- navbar -->
        </div>
      </div>
    </div>
    <!-- row -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
const userStore = 'userStore';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(userStore, ['isLogin', 'userInfo']),
    // ...mapGetters(['checkUserInfo']),
  },
  mounted() {
    console.log(this.userInfo);
    console.log(this.isLogin);
  },
  methods: {
    ...mapActions(userStore, ['userLogout']),
    // ...mapMutations(userStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
    async logoutHandler() {
      // this.SET_IS_LOGIN(false);
      // this.SET_USER_INFO(null);
      // sessionStorage.removeItem("access-token");
      // if (this.$route.path != "/") this.$router.push({ name: "main" });
      console.log(this.userInfo.id);
      //vuex actions에서 userLogout 실행(Backend에 저장 된 리프레시 토큰 없애기
      //+ satate에 isLogin, userInfo 정보 변경)
      // this.$store.dispatch("userLogout", this.userInfo.userid);
      await sessionStorage.removeItem('access-token'); //저장된 토큰 없애기
      await sessionStorage.removeItem('refresh-token'); //저장된 토큰 없애기
      await this.userLogout(this.userInfo.id);

      if (this.$route.path != '/') this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style></style>
