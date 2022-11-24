<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-bottom">
        <div class="container">
          <div class="inner">
            <div class="row">
              <div class="col-12">
                <div class="content">
                  <ul class="footer-bottom-links">
                    <!-- <li><a href="javascript:void(0)">회사소개</a></li>
                      <li><a href="javascript:void(0)"> 이용약관</a></li>
                      <li><a href="javascript:void(0)">개인정보처리방침</a></li>
                      <li><a href="javascript:void(0)">청소년보호정책</a></li> -->
                    <li class="nav-item"><router-link :to="{ name: 'noticeList' }">공지사항</router-link></li>
                    <li class="nav-item"><router-link :to="{ name: 'sitemap' }">사이트맵</router-link></li>
                  </ul>
                  <p class="copyright-text">
                    Designed and Developed by ssafy
                    <a href="https://lab.ssafy.com/wpgur07/whereismyhousevueback" rel="nofollow" target="_blank">SSAFY</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style></style>
