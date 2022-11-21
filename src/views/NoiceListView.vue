<template>
  <div class="about">
    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">공지사항</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><a href="${root}/index">Home</a></li>
              <li>공지사항</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <section class="category-page section">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-12">
            <div class="category-sidebar">
              <div class="single-widget search">
                <h3>검색</h3>
                <form action="#">
                  <input type="text" placeholder="Search Here..." />
                  <button type="submit"><i class="lni lni-search-alt"></i></button>
                </form>
              </div>

              <div class="single-widget">
                <h3>All Categories</h3>
                <ul class="list">
                  <li>
                    <a href="javascript:void(0)"><i class="lni lni-control-panel"></i> Services <span>20</span></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"><i class="lni lni-bullhorn"></i> Marketing <span>55</span></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"><i class="lni lni-home"></i> Real Estate<span>35</span></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"><i class="lni lni-bolt"></i> Electronics <span>60</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <div class="category-grid-list">
              <div class="row">
                <div class="col-12">
                  <div class="category-grid-topbar mb-3">
                    <div class="row align-items-center">
                      <div class="col-lg-6 col-md-6 col-12">
                        <h3 class="title">Showing 1-12 of 21 results found</h3>
                      </div>
                      <div class="col-lg-6 col-md-6 col-12">
                        <nav>
                          <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list" aria-selected="true">
                              <i class="lni lni-list"></i>
                            </button>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 col-12">
                    <div class="main-content">
                      <div class="dashboard-block mt-0">
                        <div class="row block-title">
                          <div class="col-lg-11 col-md-11 col-12">
                            <h3>공지사항 목록</h3>
                          </div>

                          <div class="col-lg-1 col-md-1 col-12 align-middle">
                            <div class="action-btn">
                              <router-link :to="{ name: 'noticeInsert' }"><i class="lni lni-plus"></i></router-link>
                            </div>
                            <!-- <c:if test="${not empty userInfo and userInfo.id eq 'admin'}">
                            </c:if> -->
                          </div>
                        </div>

                        <div class="my-items">
                          <div class="item-list-title">
                            <div class="row align-items-center">
                              <div class="col-lg-2 col-md-2 col-12">
                                <p>글번호</p>
                              </div>
                              <div class="col-lg-3 col-md-3 col-12">
                                <p>제목</p>
                              </div>
                              <div class="col-lg-2 col-md-2 col-12">
                                <p>작성자</p>
                              </div>
                              <div class="col-lg-2 col-md-2 col-12">
                                <p>작성일</p>
                              </div>
                              <div class="col-lg-2 col-md-2 col-12 align-right">
                                <p>Action</p>
                              </div>
                            </div>
                          </div>

                          <!-- start of list -->
                          <notice-item v-for="(item, index) in this.notices" :key="index" :notice="item"></notice-item>
                          <!-- <c:forEach items="${notices}" var="notice">
                          </c:forEach> -->
                          <!-- end of list -->
                        </div>
                      </div>
                    </div>

                    <!-- end of pagination -->
                    <div class="row">
                      <div class="col-12">
                        <div class="pagination left">
                          <ul class="pagination-list">
                            <li><a href="javascript:void(0)">1</a></li>
                            <li class="active"><a href="javascript:void(0)">2</a></li>
                            <li><a href="javascript:void(0)">3</a></li>
                            <li><a href="javascript:void(0)">4</a></li>
                            <li>
                              <a href="javascript:void(0)"><i class="lni lni-chevron-right"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- start of pagination -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import http from '@/api/http';
import noticeItem from '@/components/NoticeItem.vue';
export default {
  data() {
    return {
      notices: [],
      fields: [
        { value: 'notcieNo', lable: '글번호' },
        { value: 'title', lable: '제목' },
        { value: 'author', lable: '작성자' },
        { value: 'createdTime', lable: '작성일' },
        { value: 'price', lable: 'action' },
      ],
    };
  },
  components: {
    noticeItem,
  },
  created() {
    http.get('notice').then(({ data }) => {
      this.notices = data;
      console.log(data);
    });
  },
  methods: {},
};
</script>
