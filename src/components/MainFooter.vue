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
  padding: 20px 10px;
  text-align: center;
  @media (min-width: 768px) {
    padding: 20px 60px;
  }
}
p {
  color: #ffffff;
  font-size: 14px;
}
</style>
