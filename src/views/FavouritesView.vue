<template>
  <div>
    <h1>Favourites Recipes</h1>
    <RecipesList :recipes="favourites" />
  </div>
</template>

<script>
import RecipesList from "@/components/RecipesList.vue";
import { useFavourites } from "@/hooks/useFavourites";

export default {
  components: { RecipesList },
  setup() {
    const { getFavourites } = useFavourites();
    const favourites = getFavourites();

    return { favourites };
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  text-align: center;
  color: #6d544c;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
}
</style>
