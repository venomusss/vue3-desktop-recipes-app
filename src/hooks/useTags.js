import { ref, onMounted } from "vue";
import axios from "axios";

export const useTags = () => {
  const tags = ref([]);
  const fetching = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes/tags");
      tags.value = response.data;
    } catch (e) {
      console.log(e);
    }
  };

  onMounted(fetching);

  return { tags };
};
