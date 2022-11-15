<template>
  <div class="jumbotron">
    <h2 class="text-center">Vue Js를 이용한 도서 관리</h2>
    <div class="nav">
      <div class="nav-item">
        <router-link class="nav-link" :to="{ name: 'BookListView' }"
          >도서목록</router-link
        >
      </div>
      <div class="nav-item">
        <router-link class="nav-link" :to="{ name: 'BookRegistView' }"
          >도서등록</router-link
        >
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
