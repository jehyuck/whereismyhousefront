<template>
  <div class="about">
    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">Apt Details</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li>
                <a href="${root}/index">Home</a>
              </li>
              <li>Apt Details</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section class="item-details section">
      <div class="container">
        <div class="top-area">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-12">
              <div class="product-images">
                <main id="gallery">
                  <map-view-vue></map-view-vue>
                  <!-- kakao map start -->
                  <!-- <div id="map" style="width: 100%; height: 700px"></div>
                  <script
                    type="text/javascript"
                    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=86fe11c6c628248e5e1d06dca421c602"
                  ></script>
                  <script>
                    var lat = `${houseInfo.lat}`,
                      lng = `${houseInfo.lng}`;
                    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
                      mapOption = {
                        center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
                        level: 3, // 지도의 확대 레벨
                      };

                    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

                    // 마커가 표시될 위치입니다
                    var markerPosition = new kakao.maps.LatLng(lat, lng);

                    // 마커를 생성합니다
                    var marker = new kakao.maps.Marker({
                      position: markerPosition,
                    });

                    // 마커가 지도 위에 표시되도록 설정합니다
                    marker.setMap(map);

                    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
                    // marker.setMap(null);
                  </script> -->
                  <!-- <img src="./item-details_files/image1.jpg" id="current" alt="#"> -->
                  <!-- kakao map end -->
                </main>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12">
              <div class="product-info">
                <h2 class="title">{{ houseInfo.aptName }}</h2>
                <p class="location">
                  <i class="lni lni-map-marker"></i><a href="javascript:void(0)">{{ houseInfo.sidoName }} {{ houseInfo.gugunName }} {{ houseInfo.dongName }} {{ houseInfo.jibun }}</a>
                </p>
                <ul>
                  <li style="font-size: 18px; font-weight: 600; color: #5830e0">최근 거래가</li>
                  <li style="font-size: 18px; font-weight: 600; color: #5830e0; float: right">{{ houseInfo.dealAmount }} 만 원</li>
                </ul>
                <div class="list-info">
                  <div style="overflow: auto; height: 500px">
                    <table class="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>거래 날짜</th>
                          <th>전용 면적</th>
                          <th>층</th>
                          <th>거래 가격</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(apt, index) in aptList" :key="index">
                          <td>{{ apt.dealYear }}.{{ apt.dealMonth }}.{{ apt.dealDay }}</td>
                          <td>{{ apt.area }}</td>
                          <td>{{ apt.floor }}</td>
                          <td>{{ apt.dealAmount }}</td>
                        </tr>
                      </tbody>
                    </table>
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
import MapViewVue from '@/components/MapView.vue';

export default {
  data() {
    return {
      houseInfo: {},
      aptList: [],
      map: null,
    };
  },
  components: {
    MapViewVue,
  },
  created() {
    this.houseInfo = this.$route.query;
    console.log(this.houseInfo);

    console.log(
      http.get('house/apt', { params: this.houseInfo }).then(({ data }) => {
        console.log(data);
        this.aptList = data.aptList;
      })
    );
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=b70f48995231071c0cead1213a57bb03';
      document.head.appendChild(script);
    }
    var lat = `${this.houseInfo.lat}`,
      lng = `${this.houseInfo.lng}`;
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(lat, lng);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);
  },
  methods: {
    initMap() {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
    },
  },
};
</script>
