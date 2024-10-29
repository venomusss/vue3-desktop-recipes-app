<template>
  <div class="card-wrapper">
    <div
      class="card-image"
      :style="{ backgroundImage: `url(${recipe.image})` }"
    />
    <div class="card-content">
      <h3 class="card-title">{{ recipe.name }}</h3>
      <p>
        Servings: <strong>{{ recipe.servings }}</strong>
      </p>
      <p>
        Difficulty: <strong>{{ recipe.difficulty }}</strong>
      </p>
      <p>
        Cuisine: <strong>{{ recipe.cuisine }}</strong>
      </p>
      <p>
        Meal Type: <strong>{{ recipe.mealType[0] }}</strong>
      </p>
      <p class="details" @click="$router.push(`/recipes/${recipe.id}`)">
        View details
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  background: #ffffff;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  transition: 0.2s linear;
  &:hover {
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
}

.card-image {
  border-radius: 14px;
  height: 240px;
  background-color: rgb(211, 211, 211);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    height: 280px;
  }
  @media (min-width: 1024px) {
    height: 300px;
  }
  @media (min-width: 1024px) {
    height: 360px;
  }
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  padding: 10px 15px;
  @media (min-width: 768px) {
    padding: 10px 20px 15px 20px;
  }
}
.details {
  color: #977266;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
.card-title {
  color: #6d544c;
}
</style>
