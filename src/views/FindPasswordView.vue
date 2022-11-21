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
              <h1 class="page-title">비밀번호 찾기</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><a href="${root}/index">Home</a></li>
              <li>Find Password</li>
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
              <h4 class="title">비밀번호 찾기</h4>
              <form @submit.prevent="passwordFindHandler">
                <div class="form-group">
                  <label>id*</label>
                  <input v-model="req.id" ref="id" name="id" type="text" />
                </div>
                <div class="form-group">
                  <label>이름*</label>
                  <input v-model="req.name" ref="name" name="name" type="text" />
                </div>
                <div class="form-group">
                  <label>전화번호*</label>
                  <input v-model="req.phone" ref="phone" name="phone" type="text" />
                </div>
                <div class="button">
                  <button type="submit" class="btn">비밀번호 찾기</button>
                </div>
                <div class="row align-items-center">
                  <div class="col-lg-6 col-md-6 col-12">
                    <p class="outer-link">
                      <router-link to="/login">로그인</router-link>
                    </p>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <p class="outer-link">
                      <router-link to="/regist">회원가입</router-link>
                    </p>
                  </div>
                </div>
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
import http from '@/api/http';
export default {
  data() {
    return {
      req: {
        id: '',
        name: '',
        phone: '',
      },
    };
  },
  methods: {
    moveHandler() {
      this.$router.push({
        name: 'login',
      });
    },
    passwordFindHandler() {
      let err = false;
      let msg = '';
      !this.req.id && ((msg = '아이디를 입력해 주세요'), (err = true), this.$refs.id.focus());
      !err & !this.req.name && ((msg = '이름을 입력해주세요'), (err = true), this.$refs.name.focus());
      !err & !this.req.phone && ((msg = '전화번호를 입력해주세요'), (err = true), this.$refs.phone.focus());

      if (err) {
        alert(msg);
      } else {
        http.post('user/find', this.req).then(({ data }) => {
          if (data.message == 'success') {
            alert('비밀번호는...' + data.find);
            this.moveHandler();
          } else {
            alert('입력 정보를 다시 확인해주세요.');
            console.log(data);
          }
        });
      }
    },
  },
};
</script>
