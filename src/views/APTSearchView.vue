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
              <li><a href="${root}/index">Home</a></li>
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
                            <div class="pagination left">
                              <ul class="pagination-list">
                                <c:set var="curPgNo" value="${pgNo}"></c:set>
                                <c:forEach var="pgIdx" begin="1" end="${pgSize + 1}" step="1">
                                  <c:choose>
                                    <c:when test="${curPgNo eq pgIdx}">
                                      <li class="active"><a href="${root}/house/search/?sido=${sidoCode}&gugun=${gugunCode}&dong=${dongCode}&pgNo=${pgIdx}">${pgIdx}</a></li>
                                    </c:when>
                                    <c:otherwise>
                                      <li><a href="${root}/house/search/?sido=${sidoCode}&gugun=${gugunCode}&dong=${dongCode}&pgNo=${pgIdx}">${pgIdx}</a></li>
                                    </c:otherwise>
                                  </c:choose>
                                </c:forEach>
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
                            <div class="pagination left">
                              <ul class="pagination-list">
                                <a href="${root}/house/search?sido=${sidoCode}&gugun=${gugunCode}&dong=${dongCode}&aptName=${aptName}&pgNo=${(pgNo-10 > 0 ? pgNo-10 : 1)}">이전</a>

                                <div
                                  v-for="(item, index) in items"
                                  :key="index"
                                  var="pgIdx"
                                  begin="${(pgNo - (pgNo)%10) < 1 ? 1 : pgNo - (pgNo)%10}"
                                  end="${(pgNo - pgNo%10 + 9) > pgSize ? pgSize : (pgNo - pgNo%10 + 9)}"
                                  step="1"
                                >
                                  <c:choose>
                                    <c:when test="${pgNo eq pgIdx}">
                                      <li class="active"><a href="${root}/house/search?sido=${sidoCode}&gugun=${gugunCode}&dong=${dongCode}&aptName=${aptName}&pgNo=${pgIdx}">{{}}</a></li>
                                    </c:when>
                                    <c:otherwise>
                                      <li><a href="${root}/house/search?sido=${sidoCode}&gugun=${gugunCode}&dong=${dongCode}&aptName=${aptName}&pgNo=${pgIdx}">${pgIdx}</a></li>
                                    </c:otherwise>
                                  </c:choose>
                                </div>
                                <a
                                  href="${root}/house/search?sido=${sidoCode}&gugun=${gugunCode}&dong=${dongCode}&aptName=${aptName}&pgNo=${((pgNo+10 > pgSize ? pgSize : pgNo+10 - pgNo%10) == 0 ? 1 : (pgNo+10 - pgNo%10))}"
                                  >다음</a
                                >
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
            <!-- house-info Start-->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// <div class="preloader">
//       <div class="preloader-inner">
//         <div class="preloader-icon">
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </div>
import SearchBox from '@/components/SearchBox.vue';
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['apts', 'totalListSize', 'pgSize', 'pgno', 'start', 'end']),
  },
  components: {
    SearchBox,
  },
};
</script>
