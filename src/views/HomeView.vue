<template>
  <section class="hero-area overlay">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1 col-md-12 col-12">
          <div class="hero-text text-center">
            <!-- Start Hero Text -->
            <div class="section-heading">
              <h2 class="wow fadeInUp" data-wow-delay=".3s">어서와.. 우리 집은 처음이지?</h2>
              <p class="wow fadeInUp" data-wow-delay=".5s">부동산 정보들을 한 번에 검색할 수 있는 사이트</p>
            </div>
            <search-box></search-box>
            <!-- End Search Form -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import SearchBox from '@/components/SearchBox.vue';
export default {
  name: 'HomeView',
  components: {
    SearchBox,
  },
  data() {
    return {
      msg: 'SSAFY에 오신것을 환경합니다.',
    };
  },
};
</script>
