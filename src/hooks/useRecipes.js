import { ref, onMounted, watch } from "vue";
import axios from "axios";

export const useRecipes = (searchQuery, tagQuery) => {
  const recipes = ref([]);
  const isLoading = ref(false);
  const page = ref(0);
  const hasMore = ref(true);

  const fetching = async () => {
    try {
      isLoading.value = true;
      let baseUrl = "https://dummyjson.com/recipes";

      if (tagQuery.value) {
        baseUrl += `/tag/${tagQuery.value}`;
      }

      if (searchQuery.value) {
        baseUrl += `/search?q=${searchQuery.value}`;
      }

      const response = await axios.get(baseUrl, {
        params: {
          skip: page.value * 8,
          limit: 8,
        },
      });

      recipes.value = [...recipes.value, ...response.data.recipes];

      hasMore.value = recipes.value.length < response.data.total;
    } catch (e) {
      console.log(e);
    } finally {
      isLoading.value = false;
    }
  };

  const loadMore = () => {
    if (!isLoading.value && hasMore.value) {
      page.value++;
      fetching();
    }
  };

  watch([tagQuery, searchQuery], (newValues, oldValues) => {
    const [newTagValue, newSearchValue] = newValues;
    const [oldTagValue, oldSearchValue] = oldValues;

    const resetData = () => {
      recipes.value = [];
      page.value = 0;
      hasMore.value = true;
      fetching();
    };

    if (newTagValue === "" && newSearchValue === "") {
      resetData();
    } else if (newTagValue !== oldTagValue && newTagValue !== "") {
      searchQuery.value = "";
      resetData();
    } else if (newSearchValue !== oldSearchValue && newSearchValue !== "") {
      tagQuery.value = "";
      resetData();
    }
  });

  onMounted(fetching);

  return { recipes, isLoading, loadMore, hasMore };
};
