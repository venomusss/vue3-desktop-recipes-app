<template>
  <div class="header">
    <h2 @click="$router.push('/')">Recipes</h2>
  </div>
</template>

<style scoped>
.header {
  background-color: #977266;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
}
h2 {
  color: #ffffff;
  font-size: 32px;
  cursor: pointer;
}
</style>
