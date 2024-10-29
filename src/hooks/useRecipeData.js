import { ref, watch, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

export const useRecipeData = () => {
  const route = useRoute();
  const recipe = ref(null);
  const isLoading = ref(false);
  const similar = ref([]);

  const fetching = async (id) => {
    try {
      isLoading.value = true;
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
      recipe.value = response.data;

      const promises = response.data.tags.map((item) =>
        axios.get(`https://dummyjson.com/recipes/tag/${item}`)
      );

      const responses = await Promise.all(promises);

      const allRecipes = responses.flatMap((res) => res.data.recipes);
      const uniqueRecipes = Array.from(
        new Map(allRecipes.map((r) => [r.id, r])).values()
      );

      similar.value = uniqueRecipes;
    } catch (e) {
      console.error("Error fetching recipe data:", e);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    fetching(route.params.id);
  });

  watch(
    () => route.params.id,
    (newId) => {
      if (newId) fetching(newId);
    }
  );

  return { recipe, isLoading, similar };
};
