<template>
  <div class="about">
    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">Apt Listings</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><router-link to="/">Home</router-link></li>
              <li>Apt Listings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <section class="category-page section">
      <div class="row">
        <!-- 검색 창 -->
        <div class="">
          <div class="container">
            <div class="row align-items-center">
              <!-- Start Search Form -->
              <search-box></search-box>
              <!-- End Search Form -->
            </div>
            <div class="row">
              <div class="container">
                <div class="category-grid-list">
                  <div class="col-12">
                    <div class="category-grid-topbar">
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-12">
                          <h3 class="title">{{ totalListSize }} 채의 아파트가 검색되었습니다</h3>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                          <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                              <button class="nav-link" id="nav-grid-tab" data-bs-toggle="tab" data-bs-target="#nav-grid" type="button" role="tab" aria-controls="nav-grid" aria-selected="false">
                                <i class="lni lni-grid-alt"></i>
                              </button>
                              <button class="nav-link active" id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list" aria-selected="true">
                                <i class="lni lni-list"></i>
                              </button>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <!-- 아파트 배열 출력하기 -->
                    <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                        <div class="row">
                          <div v-for="(apt, index) in apts" :key="index">
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-12">
                                <div class="single-item-grid">
                                  <div class="row align-items-center">
                                    <div class="col-lg-5 col-md-7 col-12">
                                      <div class="image">
                                        <router-link
                                          :to="{
                                            name: `aptDetail`,
                                            query: {
                                              aptCode: apt.aptCode,
                                              aptName: apt.aptName,
                                              sidoName: apt.sidoName,
                                              gugunName: apt.gugunName,
                                              dongName: apt.dongName,
                                              jibun: apt.jibun,
                                              dealAmount: apt.dealAmount,
                                              lat: apt.lat,
                                              lng: apt.lng,
                                            },
                                          }"
                                        >
                                          <img src="@/assets/images/apart/apart1.jpg" alt="#" />
                                        </router-link>
                                        <i class="cross-badge lni lni-bolt"></i>
                                      </div>
                                    </div>
                                    <div class="col-lg-7 col-md-5 col-12">
                                      <div class="content">
                                        <h3 class="title">
                                          <router-link
                                            :to="{
                                              name: `aptDetail`,
                                              query: {
                                                aptCode: apt.aptCode,
                                                aptName: apt.aptName,
                                                sidoName: apt.sidoName,
                                                gugunName: apt.gugunName,
                                                dongName: apt.dongName,
                                                jibun: apt.jibun,
                                                dealAmount: apt.dealAmount,
                                                lat: apt.lat,
                                                lng: apt.lng,
                                              },
                                            }"
                                            >{{ apt.aptName }}</router-link
                                          >
                                        </h3>
                                        <p class="location">
                                          <a href="javascript:void(0)"><i class="lni lni-map-marker"> </i>{{ apt.sidoName }} {{ apt.gugunName }} {{ apt.dongName }} {{ apt.jibun }}</a>
                                        </p>
                                        <ul class="info">
                                          <li class="price">최근 거래가</li>
                                          <li class="like">
                                            <a href="javascript:void(0)"><i class="lni lni-heart"></i></a>
                                          </li>
                                          <li class="price me-1" style="float: right">{{ apt.dealAmount }} 만 원</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div class="pagination center">
                              <ul class="pagination-list">
                                <li class="btn btn-primary" @click="prePage">이전</li>

                                <li class="btn btn-primary" v-for="item in pageList" :key="item" @click="setPage($event)">
                                  {{ item }}
                                </li>
                                <li class="btn btn-primary" @click="nextPage">다음</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade show active" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                        <div v-for="(apt, index) in apts" :key="index">
                          <div class="row">
                            <div class="col-lg-12 col-md-12 col-12">
                              <div class="single-item-grid">
                                <div class="row align-items-center">
                                  <div class="col-lg-5 col-md-7 col-12">
                                    <div class="image">
                                      <router-link
                                        :to="{
                                          name: `aptDetail`,
                                          query: {
                                            aptCode: apt.aptCode,
                                            aptName: apt.aptName,
                                            sidoName: apt.sidoName,
                                            gugunName: apt.gugunName,
                                            dongName: apt.dongName,
                                            jibun: apt.jibun,
                                            dealAmount: apt.dealAmount,
                                            lat: apt.lat,
                                            lng: apt.lng,
                                          },
                                        }"
                                      >
                                        <img src="@/assets/images/apart/apart1.jpg" alt="#" />
                                      </router-link>
                                      <i class="cross-badge lni lni-bolt"></i>
                                    </div>
                                  </div>
                                  <div class="col-lg-7 col-md-5 col-12">
                                    <div class="content">
                                      <h3 class="title">
                                        <router-link
                                          :to="{
                                            name: `aptDetail`,
                                            query: {
                                              aptCode: apt.aptCode,
                                              aptName: apt.aptName,
                                              sidoName: apt.sidoName,
                                              gugunName: apt.gugunName,
                                              dongName: apt.dongName,
                                              jibun: apt.jibun,
                                              dealAmount: apt.dealAmount,
                                              lat: apt.lat,
                                              lng: apt.lng,
                                            },
                                          }"
                                          >{{ apt.aptName }}</router-link
                                        >
                                      </h3>
                                      <p class="location">
                                        <a href="javascript:void(0)"><i class="lni lni-map-marker"> </i>{{ apt.sidoName }} {{ apt.gugunName }} {{ apt.dongName }} {{ apt.jibun }}</a>
                                      </p>
                                      <ul class="info">
                                        <li class="price">최근 거래가</li>
                                        <li class="like">
                                          <a href="javascript:void(0)"><i class="lni lni-heart"></i></a>
                                        </li>
                                        <li class="price me-1" style="float: right">{{ apt.dealAmount }} 만 원</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div class="pagination center">
                              <ul class="pagination-list">
                                <li class="btn btn-primary" @click="prePage">이전</li>

                                <li class="btn btn-primary" v-for="item in pageList" :key="item" @click="setPage($event)">
                                  {{ item }}
                                </li>
                                <li class="btn btn-primary" @click="nextPage">다음</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 검색 창 -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';
import { mapState, mapActions } from 'vuex';
const searchStore = 'searchStore';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(searchStore, ['apts', 'totalListSize', 'pgSize', 'searchPgno', 'start', 'end', 'pageList', 'searchPgno']),
  },
  components: {
    SearchBox,
  },
  created() {},
  methods: {
    ...mapActions(searchStore, ['setStartEnd', 'moveStartEnd']),

    setPage(event) {
      this.setStartEnd(event.currentTarget.innerText);
    },
    prePage() {
      if (this.start > 10) {
        this.moveStartEnd(-10);
      }
    },
    nextPage() {
      if (this.start + 10 < this.pgSize) {
        this.moveStartEnd(10);
      }
    },
  },
};
</script>
