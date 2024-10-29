<template>
  <div class="stat-item">
    <p class="stat-title">{{ title }}</p>
    <p class="stat-value">{{ value }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.stat-item {
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #ebd8d0;
}
.stat-title {
  font-size: 14px;
}
.stat-value {
  font-size: 24px;
  font-weight: 500;
  color: #977266;
}
</style>
