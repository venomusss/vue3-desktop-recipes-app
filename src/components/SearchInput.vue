<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 2px solid #6d544c;
  border-radius: 25px;
  padding: 15px 20px;
  margin-bottom: 25px;
  color: #6d544c;
  outline: none;
  font-size: 18px;
}
</style>
