<template>
  <div>
    <div class="back" @click="$router.back()">{{ "<-  Back" }}</div>
    <div class="recipe-wrapper">
      <img :alt="recipe.name" :src="recipe.image" />
      <div class="recipe-content">
        <div class="recipe-title-wrapper">
          <h1>{{ recipe.name }}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.0"
            id="Layer_1"
            width="800px"
            height="800px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
            @click="
              isFavourite(recipe.id)
                ? removeFavourite(recipe.id)
                : setFavourites(recipe)
            "
          >
            <g>
              <path
                :fill="!isFavourite(recipe.id) ? 'transparent' : '#cba69a'"
                d="M58.714,29.977c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56   s-1.023-0.195-1.414-0.586c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21   C2,13.268,8.268,7,16,7c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677   l0.009,0.009C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"
              />
              <path
                :fill="!isFavourite(recipe.id) ? 'transparent' : '#cba69a'"
                d="M58.714,29.977c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56   s-1.023-0.195-1.414-0.586c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21   C2,13.268,8.268,7,16,7c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677   l0.009,0.009C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"
              />
              <g>
                <path
                  :fill="!isFavourite(recipe.id) ? '#cba69a' : '#F5E6D3'"
                  d="M48,5c-4.418,0-8.418,1.791-11.313,4.687l-3.979,3.961c-0.391,0.391-1.023,0.391-1.414,0    c0,0-3.971-3.97-3.979-3.961C24.418,6.791,20.418,5,16,5C7.163,5,0,12.163,0,21c0,3.338,1.024,6.436,2.773,9    c0,0,0.734,1.164,1.602,2.031s24.797,24.797,24.797,24.797C29.953,57.609,30.977,58,32,58s2.047-0.391,2.828-1.172    c0,0,23.93-23.93,24.797-24.797S61.227,30,61.227,30C62.976,27.436,64,24.338,64,21C64,12.163,56.837,5,48,5z M58.714,29.977    c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56s-1.023-0.195-1.414-0.586    c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21C2,13.268,8.268,7,16,7    c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677l0.009,0.009    C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"
                />
                <path
                  :fill="!isFavourite(recipe.id) ? '#cba69a' : '#F5E6D3'"
                  d="M48,11c-0.553,0-1,0.447-1,1s0.447,1,1,1c4.418,0,8,3.582,8,8c0,0.553,0.447,1,1,1s1-0.447,1-1    C58,15.478,53.522,11,48,11z"
                />
              </g>
            </g>
          </svg>
        </div>
        <div class="ingredients">
          <div class="ingredient" v-for="tag in recipe.tags" :key="tag">
            {{ tag }}
          </div>
        </div>
        <p><strong>Rating: </strong>{{ recipe.rating }}</p>
        <div class="stat-items">
          <StatItem
            title="Preparation Time"
            :value="`${recipe.prepTimeMinutes} Min`"
          />
          <StatItem
            title="Cooking Time"
            :value="`${recipe.cookTimeMinutes} Min`"
          />
          <StatItem title="Difficulty" :value="recipe.difficulty" />
          <StatItem
            title="Calories Per Serving"
            :value="recipe.caloriesPerServing"
          />
        </div>
        <strong>Ingredients:</strong>
        <div class="ingredients">
          <div
            class="ingredient"
            v-for="ingredient in recipe.ingredients"
            :key="ingredient"
          >
            {{ ingredient }}
          </div>
        </div>
        <strong>Instructions:</strong>
        <div class="instructions">
          <p
            v-for="(instruction, index) in recipe.instructions"
            :key="instruction"
            class="instuction"
          >
            {{ index + 1 }}. {{ instruction }}
          </p>
        </div>
      </div>
    </div>
    <div class="similar">
      <strong>Similar Recipes:</strong>
      <RecipesList v-if="similar && similar.length > 0" :recipes="similar" />
    </div>
  </div>
</template>

<script>
import RecipesList from "./RecipesList.vue";
import StatItem from "./StatItem.vue";
import { useFavourites } from "@/hooks/useFavourites";

export default {
  components: { StatItem, RecipesList },
  setup() {
    const { setFavourites, isFavourite, removeFavourite } = useFavourites();
    return { setFavourites, isFavourite, removeFavourite };
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
    similar: Array,
  },
};
</script>

<style scoped>
.recipe-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  img {
    width: 100%;
    height: auto;
    border-radius: 50px;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
}
.recipe-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    font-size: 21px;
    color: #6d544c;
    @media (min-width: 768px) {
      font-size: 32px;
    }
  }
}

.recipe-title-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  svg {
    width: 40px;
    min-width: 40px;
    height: auto;
    cursor: pointer;
    transition: 0.2s linear;
    &:hover {
      transform: scale(1.05);
    }
  }
}

.stat-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: #977266;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
.ingredients {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}
.ingredient {
  padding: 10px 15px;
  box-sizing: border-box;
  border-radius: 50px;
  background-color: #ab8981;
  color: #ffffff;
  width: fit-content;
}
.instructions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.back {
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;
  color: #6d544c;
  cursor: pointer;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
}
.similar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  strong {
    font-size: 24px;
    color: #6d544c;
    font-weight: 500;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 100px;
  }
}
</style>
