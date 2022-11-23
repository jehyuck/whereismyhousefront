<template>
  <div class="about">
    <!-- 메인 섹션 START -->
    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">사이트맵</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li><router-link to="/">Home</router-link></li>
              <li>SITEMAP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <section class="sitemap section">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <div class="list-group">
              <h3><router-link to="/">Home</router-link></h3>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-12">
            <div class="list-group">
              <h3>PAGES</h3>
              <ul>
                <li class="nav-item zz"><router-link :to="{ name: 'aptSearch' }">검색</router-link></li>
                <li class="nav-item zz"><router-link :to="{ name: 'about' }">홈페이지 소개</router-link></li>
                <li class="nav-item zz"><router-link :to="{ name: 'noticeList' }">공지사항</router-link></li>
                <li class="nav-item zz"><router-link :to="{ name: 'sitemap' }">사이트맵</router-link></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <div class="list-group">
              <h3>사용자</h3>
              <ul>
                <li class="nav-item zz"><router-link :to="{ name: 'login' }">로그인</router-link></li>
                <li class="nav-item zz"><router-link :to="{ name: 'regist' }">회원가입</router-link></li>
                <li class="nav-item zz"><router-link :to="{ name: 'findPassword' }">비밀번호 찾기</router-link></li>
                <li class="nav-item zz"><router-link :to="{ name: 'mypage' }">회원 정보 조회 및 수정</router-link></li>
                <li class="nav-item zz"><router-link :to="{ name: 'Bookmark' }">관심 지역 목록</router-link></li>
                <li class="nav-item zz"><router-link :to="{ name: 'withdrawal' }">회원 탈퇴</router-link></li>
                <li class="nav-item zz"><router-link :to="{ name: 'mypage' }">로그아웃</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
