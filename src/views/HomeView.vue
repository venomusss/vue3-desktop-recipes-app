<template>
  <div>
    <div class="sort-container">
      <SearchInput v-model="searchQuery" placeholder="Search recipes..." />
      <SortSelect v-model="tagQuery" :options="tags" />
    </div>
    <RecipesList :isLoading="isLoading" :recipes="recipes" />
    <div v-if="isLoading">Loading...</div>
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
}
</style>
