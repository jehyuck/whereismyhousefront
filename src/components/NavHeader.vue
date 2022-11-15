<!-- <template>
  <nav class="navbar navbar-expand-sm bg-light">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/book">도서 관리</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">로그인</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/qna">qna</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template> -->

<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-12">
        <div class="nav-inner">
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="${root}/index">
              <img src="@/assets/images/logo/logo.svg" alt="Logo" />
            </a>
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
                  <a class="active dd-menu collapsed" href="${root}/index" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="dd-menu collapsed"
                    href="javascript:void(0)"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu-1-4"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >Pages</a
                  >
                  <ul class="sub-menu collapse" id="submenu-1-4">
                    <ul>
                      <li class="nav-item"><a href="${root}/house/page">검색</a></li>
                      <li class="nav-item"><a href="${root}/pages/about-us">홈페이지 소개</a></li>
                      <li class="nav-item"><a href="${root}/notice/selectAll">공지사항</a></li>
                      <li class="nav-item"><a href="${root}/pages/sitemap">사이트맵</a></li>
                    </ul>
                  </ul>
                </li>
                <!-- <c:if test="${not empty userInfo}"> -->
                <li class="nav-item">
                  <a
                    class="dd-menu collapsed"
                    href="javascript:void(0)"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu-1-5"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >My Page</a
                  >
                  <ul class="sub-menu collapse" id="submenu-1-5">
                    <li class="nav-item"><a href="${root}/bookmark/selectAll">나의 관심 지역</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/qna">qna</router-link>
                </li>
                <!-- </c:if> -->
              </ul>
            </div>
            <!-- navbar collapse -->
            <div class="login-button">
              <ul>
                <!-- <c:choose>
                  <c:when test="${empty userInfo}">
                    <li>
                      <a href="${root}/user/login"><i class="lni lni-enter"></i> 로그인</a>
                    </li>
                    <li>
                      <a href="${root}/user/regist"><i class="lni lni-user"></i> 회원가입</a>
                    </li>
                  </c:when>
                  <c:otherwise>
                    <c:choose>
                      <c:when test="${userInfo.id eq 'admin'}">
                        <li>
                          <a href="${root}/notice/selectAll"><i class="lni lni-user"></i> 공지사항 관리</a>
                        </li>
                        <li>
                          <a href="${root}/user/logout"><i class="lni lni-user"></i> 로그아웃</a>
                        </li>
                      </c:when>
                      <c:otherwise>
                        <li>
                          <a href="${root}/user/update"><i class="lni lni-user"></i> 회원정보</a>
                        </li>
                        <li>
                          <a href="${root}/user/logout"><i class="lni lni-user"></i> 로그아웃</a>
                        </li>
                      </c:otherwise>
                    </c:choose>
                  </c:otherwise>
                </c:choose> -->
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

<style></style>
