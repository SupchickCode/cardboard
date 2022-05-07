<template>
  <div class="card card-border" style="width: 18rem">
    <img class="card-img-top" :src="require(`@/assets/${img_url}`)" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
      <p class="card-text">Атака {{ attack }}</p>
      <p class="card-text">Здоровье {{ health }}</p>
      <p class="card-text">Стоймость {{ cost }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: {
      default: "None",
      type: String,
    },
    description: {
      default:
        "Some quick example text to build on the card title and make up the bulkof the card's content.",
      type: String,
    },
    health: {
      default: "6",
      type: String,
    },
    attack: {
      default: "8",
      type: String,
    },
    cost: {
      default: "5",
      type: String,
    },
    img_url: {
      default: "cards/snake.png",
      type: String,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card {
  display: inline-block;
}

.card-border {
  border-color: black;
  border: 1px;
}

.card-img-top {
  max-width: 175px;
  max-height: 175px;
}
</style>
