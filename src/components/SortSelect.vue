<template>
  <select :value="modelValue" @input="changeOption">
    <option disabled value="">Choose Tag</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
select {
  width: 100%;
  border: 2px solid #6d544c;
  border-radius: 25px;
  padding: 15px 20px;
  margin-bottom: 25px;
  color: #6d544c;
  outline: none;
  font-size: 18px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
