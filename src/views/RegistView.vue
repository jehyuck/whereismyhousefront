<template>
  <div>
    <div class="preloader" style="opacity: 0; display: none">
      <div class="preloader-inner">
        <div class="preloader-icon"><span></span> <span></span></div>
      </div>
    </div>
    <!-- 메인 시작 -->
    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">회원가입</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li>
                <router-link class="active dd-menu collapsed" to="/" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                  >Home</router-link
                >
              </li>
              <li>Registration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <section class="login registration section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
            <div class="form-head">
              <h4 class="title">회원가입</h4>
              <form @submit="registHandler" id="formRegist">
                <div class="socila-login">
                  <ul>
                    <li>
                      <a href="javascript:void(0)" class="facebook"><i class="lni lni-facebook-original"></i>Import From Facebook</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="google"><i class="lni lni-google"></i>Import From Google Plus</a>
                    </li>
                  </ul>
                </div>
                <div class="alt-option">
                  <span>Or</span>
                </div>
                <div class="form-group"><label> 아이디</label> <input ref="id" v-model="user.id" name="id" type="text" id="id" /></div>
                <div id="idcheck-result" class="mb-3 text-primary" v-show="this.user.id !== ''">{{ this.idMsg }}</div>
                <div class="form-group"><label>비밀번호</label> <input ref="pass" v-model="user.pass" name="pass" type="password" id="password" /></div>
                <div class="form-group"><label>이름</label> <input ref="name" v-model="user.name" name="name" type="text" id="name" /></div>
                <div class="form-group"><label>주소</label> <input ref="address" v-model="user.address" name="address" type="text" id="address" /></div>
                <div class="form-group"><label>전화번호</label> <input ref="phone" v-model="user.phone" name="phone" type="text" id="phone" /></div>
                <div class="check-and-pass">
                  <div class="row align-items-center">
                    <div class="col-12">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input width-auto" id="exampleCheck1" />
                        <label class="form-check-label">약관 동의 <a href="javascript:void(0)">Terms and Conditions</a> </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="button">
                  <button type="submit" class="btn" id="btn-join">회원 가입</button>
                </div>
              </form>
              <p class="outer-link">
                이미 계정이 있으신가요?
                <!-- <a href="${root}/user/login">로그인</a> -->
                <router-link :to="{ name: 'login' }">로그인</router-link>
              </p>
              <!-- 
              <form action="${root}/user/regist" method="post" id="hiddenForm">
                <fieldset>
                  <input type="hidden" name="id" />
                  <input type="hidden" name="pass" />
                  <input type="hidden" name="name" />
                  <input type="hidden" name="address" />
                  <input type="hidden" name="phone" />
                </fieldset>
              </form> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 메인 끝 -->

    <a href="https://demo.graygrids.com/themes/classigrids-demo/registration.jsp#" class="scroll-top btn-hover"> <i class="lni lni-chevron-up"></i> </a>
  </div>
</template>

<script>
import http from '@/api/http';
export default {
  data() {
    return {
      idValid: false,
      idMsg: '',
      user: {
        id: '',
        pass: '',
        name: '',
        address: '',
        phone: '',
      },
    };
  },
  //watch? computed? updated? 뭘로 하는게 좋을까? 고민
  watch: {
    'user.id': function (inputId) {
      let minLength = 5;
      let maxLength = 16;
      if (inputId.length < minLength || inputId.length > maxLength) {
        this.idMsg = `아이디는 ${minLength}자 이상 ${maxLength}자 이하 입니다.`;
      } else {
        http.get(`user/idCheck?id=${this.user.id}`).then(({ data }) => {
          //data: userid 개수
          if (data == 0) {
            this.idValid = true;
            this.idMsg = inputId + '는 사용할 수 있습니다.';
          } else {
            this.idMsg = inputId + '는 사용할 수 없습니다.';
          }
        });
      }
    },
  },
  methods: {
    moveHandler() {
      this.$router.push({
        name: 'home',
      });
    },
    registHandler() {
      //데이타 검증
      let err = false;
      let msg = '';
      !this.user.id && ((msg = '아이디를 입력해 주세요'), (err = true), this.$refs.id.focus());
      !err && !this.idValid && ((msg = '아이디를 확인해주세요'), (err = true), this.$refs.id.focus());
      !err & !this.user.pass && ((msg = '비밀번호를 입력해주세요'), (err = true), this.$refs.pass.focus());
      !err & !this.user.name && ((msg = '이름을 입력해주세요'), (err = true), this.$refs.name.focus());
      !err & !this.user.address && ((msg = '이메일을 입력해주세요'), (err = true), this.$refs.address.focus());
      !err & !this.user.phone && ((msg = '전화번호를 입력해주세요'), (err = true), this.$refs.phone.focus());

      if (err) {
        alert(msg);
      } else {
        //수정하기
        http.post('/user', this.user).then(({ data }) => {
          if (data == 'success') {
            alert('회원가입 성공');
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
