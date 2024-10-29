<script setup>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";
</script>

<template>
  <MainHeader />
  <div class="content">
    <router-view />
  </div>
  <MainFooter />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
  font-style: normal;
}
body {
  background-color: #ebd8d0;
}
strong {
  font-weight: 500;
}
.content {
  padding: 30px 60px;
}
</style>
