<template>
  <div>
    <div class="sort-container">
      <SearchInput v-model="searchQuery" placeholder="Search recipes..." />
      <SortSelect v-model="tagQuery" :options="tags" />
    </div>
    <RecipesList :isLoading="isLoading" :columns="4" :recipes="recipes" />
    <div v-if="isLoading">Downloading...</div>
    <div ref="loadMoreTrigger" class="load-more-trigger" />
  </div>
</template>

<script>
import RecipesList from "@/components/RecipesList.vue";
import SearchInput from "@/components/SearchInput.vue";
import SortSelect from "@/components/SortSelect.vue";
import { useRecipes } from "@/hooks/useRecipes";
import { useTags } from "@/hooks/useTags";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  components: { RecipesList, SearchInput, SortSelect },
  setup() {
    const searchQuery = ref("");
    const tagQuery = ref("");
    const loadMoreTrigger = ref(null);
    const { recipes, isLoading, loadMore } = useRecipes(searchQuery, tagQuery);
    const { tags } = useTags();

    let observer = null;

    onMounted(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isLoading.value) {
            loadMore();
          }
        },
        { threshold: 0.5 }
      );

      if (loadMoreTrigger.value) {
        observer.observe(loadMoreTrigger.value);
      }
    });

    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
      }
    });

    return {
      recipes,
      isLoading,
      tags,
      searchQuery,
      loadMoreTrigger,
      tagQuery,
    };
  },
};
</script>

<style>
.load-more-trigger {
  width: 100%;
  height: 1px;
  margin-top: 30px;
}
.sort-container {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
