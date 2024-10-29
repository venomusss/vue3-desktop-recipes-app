<template>
  <div
    v-if="recipes.length > 0"
    class="recipes-list"
    :style="{
      gridTemplateColumns: `repeat(${columns}, 1fr) `,
    }"
  >
    <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
  </div>
  <div v-else-if="!isLoading && recipes.length === 0">There is no recipes</div>
</template>

<script>
import RecipeCard from "./RecipeCard.vue";

export default {
  props: {
    recipes: {
      type: Array,
      required: true,
    },
    columns: {
      type: Number,
      default: 3,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: { RecipeCard },
};
</script>

<style>
.recipes-list {
  display: grid;
  gap: 20px;
}
</style>
