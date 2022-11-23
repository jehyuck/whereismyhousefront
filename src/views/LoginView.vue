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

    <!-- 메인 섹션 START -->
    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">로그인</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><router-link to="/">Home</router-link></li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <section class="login section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
            <div class="form-head">
              <!-- 아이디 기억하기 start -->
              <!-- <c:set var="checked" value="" />
              <c:set var="id" value="" />
              <c:if test="${!empty cookie.id}">
                <c:set var="checked" value="checked='checked'" />
                <c:set var="id" value="value='${cookie.id.value}'"></c:set>
              </c:if> -->
              <!-- 아이디 기억하기 end -->
              <h4 class="title">로그인</h4>
              <form @submit.prevent="loginHandler" id="loginForm">
                <div class="form-group">
                  <label for="id">아이디</label>
                  <input v-model="user.id" type="text" class="form-control" name="id" id="id" placeholder="아이디 입력" />
                </div>
                <div class="form-group">
                  <label for="password">비밀번호</label>
                  <input v-model="user.pass" type="password" name="pass" class="form-control" id="password" placeholder="비밀번호 입력" />
                </div>
                <div class="check-and-pass">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="form-check">
                        <input @click="idsaveHandler" :checked="idsave" name="idsave" value="true" type="checkbox" class="form-check-input width-auto" id="idsave" />
                        <label class="form-check-label">아이디 저장</label>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <router-link :to="{ name: 'findPassword' }" class="lost-pass">비밀번호 찾기</router-link>
                    </div>
                  </div>
                </div>
                <div class="button">
                  <button type="submit" class="btn" id="login">로그인</button>
                </div>
                <div class="alt-option">
                  <span>Or</span>
                </div>
                <div class="socila-login">
                  <ul>
                    <li>
                      <a href="javascript:void(0)" class="facebook"><i class="lni lni-facebook-original"></i>Login With Facebook</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="google"><i class="lni lni-google"></i>Login With Google Plus</a>
                    </li>
                  </ul>
                </div>
                <p class="outer-link">
                  계정이 없으신가요?
                  <router-link :to="{ name: 'regist' }">회원가입</router-link>
                </p>
                <!-- <alert show variant="danger" v-if="isLoginError">아이디 또는 비밀번호를 확인하세요.</alert> -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 메인 섹션 END -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
const userStore = 'userStore';

export default {
  // name:"loginView",
  data() {
    return {
      // isLoginError: false,
      // key값(=idCookie)에 해당하는 쿠키를 가져온다.
      idsave: this.$cookies.get('idsave'),
      user: {
        id: this.$cookies.get('idCookie'),
        pass: null,
      },
    };
  },
  computed: {
    ...mapState(userStore, ['isLogin', 'isLoginError', 'userInfo']),
  },
  // created() {
  //   console.log(this.isLogin);
  // },
  methods: {
    moveHandler() {
      this.$router.push({
        name: 'home',
      });
    },
    created() {
      this.idsave = this.$cookies.get('idsave');
      if (this.idsave) {
        this.user.id = this.$cookies.get('idCookie');
      }
    },
    ...mapActions(userStore, ['userConfirm', 'getUserInfo']),
    async loginHandler() {
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem('access-token');
      // console.log("1. confirm() token >> " + token);
      if (this.isLogin) {
        await this.getUserInfo(token);
        // console.log("4. confirm() userInfo :: ", this.userInfo);
        this.moveHandler();
      }
      //idsave 관련 로직
      if (this.idsave) {
        console.log('id = ' + this.user.id);
        this.$cookies.set('idCookie', this.user.id);
        this.$cookies.set('idsave', true);
      } else {
        this.$cookies.remove('idCookie');
        this.$cookies.remove('idsave');
      }
    },
    idsaveHandler() {
      this.idsave = !this.idsave;
    },
  },
};
</script>
