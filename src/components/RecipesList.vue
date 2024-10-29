<template>
  <div v-if="recipes.length > 0" class="recipes-list" :style="{}">
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
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
