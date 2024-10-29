<template>
  <div>
    <div class="back" @click="$router.back()">{{ "<-  Back" }}</div>
    <div class="recipe-wrapper">
      <img :alt="recipe.name" :src="recipe.image" />
      <div class="recipe-content">
        <h1>{{ recipe.name }}</h1>
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
      <RecipesList
        v-if="similar && similar.length > 0"
        :recipes="similar"
        :columns="4"
      />
    </div>
  </div>
</template>

<script>
import RecipesList from "./RecipesList.vue";
import StatItem from "./StatItem.vue";

export default {
  components: { StatItem, RecipesList },
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  img {
    width: 100%;
    height: auto;
    border-radius: 50px;
  }
}
.recipe-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    color: #6d544c;
  }
}
.stat-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: #977266;
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
  margin-top: 100px;
  strong {
    font-size: 24px;
    color: #6d544c;
    font-weight: 500;
  }
}
</style>
