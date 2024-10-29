import { onMounted, ref } from "vue";

export const useFavourites = () => {
  const favourites = ref([]);

  const getFavourites = () => {
    const favouritesData = localStorage.getItem("favourites");
    favourites.value = JSON.parse(favouritesData) || [];
    return favourites.value;
  };

  const isFavourite = (id) => {
    return favourites.value.some((item) => item.id === id);
  };

  const setFavourites = (data) => {
    if (isFavourite(data.id)) {
      return;
    }

    localStorage.setItem(
      "favourites",
      JSON.stringify([...(favourites.value || []), data])
    );
    getFavourites();
  };

  const removeFavourite = (id) => {
    const newFavourites = favourites.value.filter((item) => item.id !== id);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
    getFavourites();
  };

  onMounted(() => {
    getFavourites();
  });
  return { getFavourites, setFavourites, isFavourite, removeFavourite };
};
