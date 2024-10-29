<template>
  <div class="footer">
    <p>© {{ currentYear }} Vue 3 recipes project by VMushii</p>
  </div>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #977266;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
}
p {
  color: #ffffff;
  font-size: 14px;
}
</style>
