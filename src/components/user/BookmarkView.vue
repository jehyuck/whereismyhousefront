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
              <h1 class="page-title">관심 지역 조회</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><router-link to="/">Home</router-link></li>
              <li>Bookmarked</li>
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
                    <router-link to="/mypage"><i class="lni lni-pencil-alt"></i>회원정보 조회/수정</router-link>
                  </li>
                  <li>
                    <router-link to="/mypage/bookmark" class="active"> <i class="lni lni-bookmark"></i>관심 지역 조회 </router-link>
                  </li>
                  <li>
                    <router-link to="/mypage/withdrawal"><i class="lni lni-trash"></i>회원 탈퇴</router-link>
                  </li>
                </ul>
                <div class="button">
                  <a class="btn" @click="logoutHandler">Logout</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 사이드바 END -->

          <div class="col-lg-9 col-md-8 col-12">
            <!-- Start Search Form -->
            <add-box></add-box>
            <!-- End Search Form -->

            <!-- Start bookmark -->
            <div class="col-lg-12 col-md-12 col-12">
              <div class="main-content">
                <div class="dashboard-block mt-0">
                  <h3 class="block-title">관심 지역 목록</h3>
                  <div class="my-items">
                    <div class="item-list-title">
                      <div class="row align-items-center">
                        <div class="col-lg-3 col-md-3 col-12">
                          <p>도/광역시</p>
                        </div>
                        <div class="col-lg-3 col-md-3 col-12">
                          <p>시/구/군</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                          <p>동</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12 align-right">
                          <p>Action</p>
                        </div>
                      </div>
                    </div>
                    <div @add="getBookmarks" v-for="(bookmark, index) in bookmarks" :key="index">
                      <div class="single-item-list">
                        <div class="row align-items-center">
                          <div class="col-lg-3 col-md-3 col-12">
                            <p>{{ bookmark.sidoName }}</p>
                          </div>
                          <div class="col-lg-3 col-md-3 col-12">
                            <p>{{ bookmark.gugunName }}</p>
                          </div>
                          <div class="col-lg-2 col-md-2 col-12">
                            <p>{{ bookmark.dongName }}</p>
                          </div>
                          <div class="col-lg-2 col-md-2 col-12 align-right">
                            <ul class="action-btn">
                              <li>
                                <a @click="viewHandler(bookmark.id)"><i class="lni lni-eye"></i></a>
                              </li>
                              <li>
                                <a @click="removeHandler(bookmark.id)"><i class="lni lni-trash"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- <div class="col">
								<div class="button">
										<a href="javascript:void(0)" class="btn">추가</a>
								</div>
							/div> -->
                </div>
              </div>
            </div>
            <!-- End bookmark Form -->
          </div>
        </div>
      </div>
    </section>
    <!-- 메인 끝 -->
  </div>
</template>

<script>
import http from '@/api/http';
import addBox from '@/components/user/addBox.vue';
import { mapState, mapActions } from 'vuex';
const userStore = 'userStore';

export default {
  components: {
    addBox,
  },
  data() {
    return {
      bookmarks: [],
    };
  },
  computed: {
    ...mapState(userStore, ['userInfo']),
  },
  created() {
    this.getBookmarks();
  },
  updated() {
    // this.getBookmarks();
  },
  methods: {
    ...mapActions(userStore, ['userLogout']),
    moveHandler() {
      this.$router.push({
        name: 'home',
      });
    },
    getBookmarks() {
      http.get(`bookmark?id=${this.userInfo.id}`).then(({ data }) => {
        if (data.message == 'success') {
          this.bookmarks = data.bookmarks;
        }
      });
    },
    viewHandler(id) {
      //id는 bookmark의 id
      this.$router.push({
        name: 'bookmarkDetail',
        params: { id: id },
      });
    },
    removeHandler(id) {
      //id는 bookmark의 id
      console.log(this.bookmarks);
      http.delete(`bookmark?id=${id}`).then(({ data }) => {
        if (data.message == 'success') {
          this.getBookmarks();
        }
      });
      this.getBookmarks();
      console.log(this.bookmarks);
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
