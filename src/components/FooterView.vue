<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-12">
        <div class="nav-inner">
          <nav class="navbar navbar-expand-lg">
            <router-link class="navbar-brand" to="/"><img src="@/assets/images/logo/logo.svg" alt="Logo" /></router-link>
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
                  <router-link class="active dd-menu collapsed" to="/" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    >Home</router-link
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="dd-menu collapsed"
                    to="javascript:void(0)"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu-1-4"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >Pages</a
                  >
                  <ul class="sub-menu collapse" id="submenu-1-4">
                    <ul>
                      <li class="nav-item"><router-link to="/house/page">검색</router-link></li>
                      <li class="nav-item"><router-link to="/pages/about-us">홈페이지 소개</router-link></li>
                      <li class="nav-item"><router-link to="/notice/selectAll">공지사항</router-link></li>
                      <li class="nav-item"><router-link to="/pages/sitemap">사이트맵</router-link></li>
                    </ul>
                  </ul>
                </li>
                <!-- <c:if test="${not empty userInfo}"> -->
                <li class="nav-item">
                  <a
                    class="dd-menu collapsed"
                    to="javascript:void(0)"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu-1-5"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >My Page</a
                  >
                  <ul class="sub-menu collapse" id="submenu-1-5">
                    <li class="nav-item"><router-link to="/bookmark/selectAll">나의 관심 지역</router-link></li>
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
                      <router-link to="/user/login"><i class="lni lni-enter"></i> 로그인</router-link>
                    </li>
                    <li>
                      <router-link to="/user/regist"><i class="lni lni-user"></i> 회원가입</router-link>
                    </li>
                  </c:when>
                  <c:otherwise>
                    <c:choose>
                      <c:when test="${userInfo.id eq 'admin'}">
                        <li>
                          <router-link to="/notice/selectAll"><i class="lni lni-user"></i> 공지사항 관리</router-link>
                        </li>
                        <li>
                          <router-link to="/user/logout"><i class="lni lni-user"></i> 로그아웃</router-link>
                        </li>
                      </c:when>
                      <c:otherwise>
                        <li>
                          <router-link to="/user/update"><i class="lni lni-user"></i> 회원정보</router-link>
                        </li>
                        <li>
                          <router-link to="/user/logout"><i class="lni lni-user"></i> 로그아웃</router-link>
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
