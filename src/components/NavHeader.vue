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
                  <a
                    id="pages"
                    class="dd-menu collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu-1-4"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    href="javascript:void(0)"
                    aria-label="Toggle navigation"
                    >Pages</a
                  >
                  <ul class="sub-menu collapse zz" id="submenu-1-4">
                    <ul class="zz">
                      <li class="nav-item zz"><router-link :to="{ name: 'aptSearch' }">검색</router-link></li>
                      <li class="nav-item zz"><router-link :to="{ name: 'about' }">홈페이지 소개</router-link></li>
                      <li class="nav-item zz"><router-link :to="{ name: 'noticeList' }">공지사항</router-link></li>
                      <li class="nav-item zz"><router-link :to="{ name: 'sitemap' }">사이트맵</router-link></li>
                    </ul>
                  </ul>
                </li>
                <!-- <c:if test="${not empty userInfo}"> -->
                <li class="nav-item">
                  <a
                    id="mypage"
                    href="javascript:void(0)"
                    class="dd-menu collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu-1-5"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >My Page
                  </a>
                  <ul class="sub-menu collapse" id="submenu-1-5">
                    <ul class="zz">
                      <li class="nav-item zz"><router-link :to="{ name: 'userModify' }">회원정보 조회/수정</router-link></li>
                      <li class="nav-item zz"><router-link :to="{ name: 'Bookmark' }">나의 관심 지역</router-link></li>
                      <li class="nav-item zz"><router-link :to="{ name: 'withdrawal' }">회원탈퇴</router-link></li>
                    </ul>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'qna' }">qna</router-link>
                </li>
                <!-- </c:if> -->
              </ul>
            </div>
            <!-- navbar collapse -->
            <div class="login-button">
              <ul>
                <div v-if="!userInfo">
                  <li>
                    <router-link :to="{ name: 'login' }"><i class="lni lni-enter"></i> 로그인</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'regist' }"><i class="lni lni-user"></i> 회원가입</router-link>
                  </li>
                </div>
                <div v-else>
                  <div v-if="userInfo.id == 'admin'">
                    <li>
                      <router-link :to="{ name: 'noticeList' }"><i class="lni lni-user"></i> 공지사항 관리</router-link>
                    </li>
                    <li>
                      <!-- <router-link to="/user/logout"><i class="lni lni-user"></i> 로그아웃</router-link> -->
                      <div @click.prevent="logoutHandler"><i class="lni lni-user"></i> 로그아웃</div>
                    </li>
                  </div>
                  <div v-else>
                    <li>
                      <router-link :to="{ name: 'mypage' }"><i class="lni lni-user"></i> 회원정보</router-link>
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
    let navbarSupportedContent = document.getElementById('navbarSupportedContent');
    let navbarToggler = document.querySelector('.mobile-menu-btn');
    navbarToggler.addEventListener('click', function () {
      navbarToggler['aria-expanded'] = navbarToggler['aria-expanded'] ? false : true;
      navbarToggler.classList.toggle('active');
      navbarSupportedContent.classList.toggle('show');
    });
    let dd_menu = document.querySelector('#pages');
    const sub_menu = document.querySelector('.sub-menu');
    dd_menu.addEventListener('click', function () {
      dd_menu['aria-expanded'] = dd_menu['aria-expanded'] ? false : true;
      dd_menu.classList.toggle('collapsed');
      sub_menu.classList.toggle('collapse');
      sub_menu.classList.toggle('show');
    });

    let dd_menu2 = document.querySelector('#mypage');
    const sub_menu2 = document.querySelector('#submenu-1-5');
    dd_menu2.addEventListener('click', function () {
      dd_menu2['aria-expanded'] = dd_menu['aria-expanded'] ? false : true;
      dd_menu2.classList.toggle('collapsed');
      sub_menu2.classList.toggle('collapse');
      sub_menu2.classList.toggle('show');
    });
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
