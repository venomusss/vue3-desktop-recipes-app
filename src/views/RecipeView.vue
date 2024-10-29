<template>
  <div v-if="isLoading">Downloading...</div>
  <RecipeInfo v-else-if="recipe" :recipe="recipe" :similar="similar" />
</template>

<script>
import { useRecipeData } from "@/hooks/useRecipeData";
import RecipeInfo from "@/components/RecipeInfo.vue";

export default {
  components: { RecipeInfo },
  setup() {
    const { recipe, isLoading, similar } = useRecipeData();
    return { recipe, isLoading, similar };
  },
};
</script>
