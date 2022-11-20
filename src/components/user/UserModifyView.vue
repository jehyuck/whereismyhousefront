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

    <!-- 메인 섹션 -->
    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">회원 정보 조회 및 수정</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li>
                <a href="${root}/index">Home</a>
              </li>
              <li>Profile Settings</li>
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
                  {{userInfo.name}}
                  <span><a href="javascript:void(0)">@{{userInfo.id}}</a></span>
                </h3>
              </div>
              <div class="dashboard-menu">
                <ul>
                  <li>
                    <router-link class="active" to="/mypage"
                      ><i class="lni lni-pencil-alt"></i>회원정보 조회/수정</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/mypage/bookmark">
                      <i class="lni lni-bookmark"></i>관심 지역 조회
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/mypage/withdrawal"><i class="lni lni-trash"></i>회원 탈퇴</router-link>
                  </li>
                </ul>
                <div class="button">
                  <a class="btn" href="${root}/user/logout">Logout</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 사이드바 END -->

          <!-- 회원 정보 조회/수정 -->
          <div class="col-lg-9 col-md-8 col-12">
            <div class="main-content">
              <div class="dashboard-block mt-0 profile-settings-block">
                <h3 class="block-title">회원 정보 조회 및 수정</h3>
                <div class="inner-block">
                  <div class="image">
                    <img src="@/assets/images/items-grid/author-1.jpg" alt="#" />
                  </div>
                  <form class="profile-setting-form" >
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <label>아이디*</label>
                          <input v-model="userInfo.id" name="id" type="text" readOnly/>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label>이름*</label>
                          <input v-model="userInfo.name" name="name" type="text" value="userInfo.name"/>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label>비밀번호*</label>
                          <input v-model="userInfo.pass" name="pass" type="password" value="userInfo.pass" />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label>주소*</label>
                          <input v-model="userInfo.address" name="address" type="text" value="userInfo.address" />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label>전화번호*</label>
                          <input v-model="userInfo.phone" name="phone" type="text" value="userInfo.phone" />
                        </div>
                      </div>
                      
                      <div class="col-12">
                        <div class="form-group button mb-0">
                          <button @click="updateHandler" type="submit" class="btn">수정</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
          <!-- 회원 정보 수정 END -->
        </div>
      </div>
    </section>
    <!-- 메인 섹션 END -->

    <a href="./profile-settings.jsp#" class="scroll-top btn-hover" style="display: none">
      <i class="lni lni-chevron-up"></i>
    </a>

  </div>
</template>

<script>
import http from '@/api/http';

import { mapState } from "vuex";
const userStore = "userStore";

export default {
  data() {
    return {
      idValid: false,
      idMsg: '',
      user:{}
    };
  },
  mounted() {
    this.user = this.userInfo
  },
  computed: {
    ...mapState(userStore, ["userInfo"])
  },
  methods: {
    moveHandler() {
      this.$router.push({
        name: 'home',
      });
    },
    updateHandler() {
        http.put(`user/update`, this.user).then(({ data }) => {
        if (data == 'success') {
            alert('회원정보 수정 완료');
          }
        })
        // .catch();
    },
  },
};

</script>
