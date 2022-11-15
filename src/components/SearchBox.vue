<template>
  <!-- 검색 창 -->
  <div class="">
    <div class="container">
      <div class="row align-items-center">
        <!-- Start Search Form -->
        <form action="${root}/house/search" id="searchForm">
          <div class="search-form wow" data-wow-delay=".7s">
            <div class="row mt-2">
              <div class="col-lg-2 col-md-2 col-12 p-0">
                <div class="search-input">
                  <label for="sido"><i class="lni lni-map-marker theme-color"></i></label>
                  <select name="sido" id="sido">
                    <option value="none" selected disabled>도/광역시</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-12 p-0">
                <div class="search-input">
                  <label for="gugun"><i class="lni lni-map-marker theme-color"></i></label>
                  <select name="gugun" id="gugun">
                    <option value="none" selected disabled>시/구/군</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-12 p-0">
                <div class="search-input">
                  <label for="dong"><i class="lni lni-map-marker theme-color"></i></label>
                  <select name="dong" id="dong">
                    <option value="none" selected disabled>동</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-12 p-0">
                <div class="search-input">
                  <label for="dong"><i class="lni lni-map-marker theme-color"></i></label>
                  <input type="text" name="aptName" id="aptName" />
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-12 p-0 search-btn button">
                <button class="btn" type="submit" form="searchForm"><i class="lni lni-search-alt"></i> Search</button>
              </div>
            </div>
          </div>
        </form>
        <!-- End Search Form -->
      </div>
    </div>
  </div>
  <!-- 검색 창 -->
</template>

<script>
export default {};
</script>

<style></style>
